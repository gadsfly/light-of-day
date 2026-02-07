/* ═══════════════════════════════════════════════════
   Light of Day — AI Reading Proxy (Cloudflare Worker)
   
   Protects the DeepSeek API key by proxying requests.
   Deploy: npx wrangler deploy
   Set API key: npx wrangler secret put DEEPSEEK_API_KEY
   ═══════════════════════════════════════════════════ */

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const MODEL = 'deepseek-chat';

// Allowed origins (update with your GitHub Pages domain)
const ALLOWED_ORIGINS = [
  'https://gadsfly.github.io',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
];

// ── Rate limiter (in-memory, per-worker-instance) ──
// Cloudflare Workers may have multiple instances, so this is best-effort.
// For heavier protection, use Cloudflare's paid Rate Limiting rules.
const RATE_LIMIT = {
  windowMs: 60_000,   // 1 minute window
  maxRequests: 5,      // max 5 AI requests per IP per minute
};
const ipHits = new Map();  // IP → { count, resetTime }

function isRateLimited(ip) {
  const now = Date.now();
  const record = ipHits.get(ip);

  if (!record || now > record.resetTime) {
    ipHits.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return false;
  }

  record.count++;
  if (record.count > RATE_LIMIT.maxRequests) return true;
  return false;
}

// Clean up stale entries periodically (prevent memory leak)
function pruneRateMap() {
  const now = Date.now();
  for (const [ip, record] of ipHits) {
    if (now > record.resetTime) ipHits.delete(ip);
  }
}

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

// ── System prompts ──

const SYSTEM_EN = `You are a warm, insightful tarot reader for "Light of Day," a gentle online tarot space. You give readings that are:

- Emotionally warm but never saccharine
- Thoughtful and grounded, not vague "spiritual" filler  
- Specific to the cards drawn and their positions
- Non-prescriptive: you illuminate possibilities, never dictate
- Around 150-250 words — enough depth without overwhelming

Structure your reading as flowing prose (no bullet points, no card-by-card headers). Weave the cards together into a coherent narrative that speaks to the querent's situation. If they asked a question, address it directly. If no question, let the cards tell their own story.

End with one gentle, open-ended reflection or invitation — something they can sit with.

Never mention that you're an AI. Speak as "the cards" or simply share insights directly.`;

const SYSTEM_ZH = `你是「光之日」的温暖而洞察力深刻的塔罗读牌师。这是一个温柔的在线塔罗空间。你的解读风格：

- 情感温暖但不甜腻
- 深思熟虑且接地气，不是空洞的"灵性"套话
- 针对抽到的具体牌和牌位进行解读
- 不强制：你照亮可能性，从不命令
- 大约150-300字 — 有深度但不压倒

用流畅的散文体写作（不要分点、不要逐张牌的标题）。将所有牌编织成一个连贯的故事，回应问卜者的处境。如果他们提了问题，直接回应。如果没有问题，让牌自己讲述故事。

以一个温和的、开放性的反思或邀请结尾——让他们可以细细品味的东西。

永远不要提到你是AI。以"牌"的口吻说话，或直接分享洞见。`;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    // ── Strict origin check (blocks curl / Postman / foreign sites) ──
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // ── Rate limiting ──
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
    pruneRateMap();
    if (isRateLimited(clientIP)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json', 'Retry-After': '60' },
      });
    }

    try {
      // ── Request size guard (reject payloads > 10 KB) ──
      const contentLength = parseInt(request.headers.get('Content-Length') || '0', 10);
      if (contentLength > 10_240) {
        return new Response(JSON.stringify({ error: 'Payload too large' }), {
          status: 413,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      const body = await request.json();
      const { question, cards, spreadType, lang } = body;

      if (!cards || !Array.isArray(cards) || cards.length === 0) {
        return new Response(JSON.stringify({ error: 'No cards provided' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      // Build the user prompt
      const userPrompt = buildUserPrompt(question, cards, spreadType, lang);
      const systemPrompt = lang === 'zh' ? SYSTEM_ZH : SYSTEM_EN;

      // Call DeepSeek
      const aiResponse = await fetch(DEEPSEEK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          max_tokens: 800,
          temperature: 0.85,
        }),
      });

      if (!aiResponse.ok) {
        const err = await aiResponse.text();
        console.error('DeepSeek error:', err);
        return new Response(JSON.stringify({ error: 'AI service error' }), {
          status: 502,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      const data = await aiResponse.json();
      const interpretation = data.choices?.[0]?.message?.content || '';

      return new Response(JSON.stringify({ interpretation }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });

    } catch (err) {
      console.error('Worker error:', err);
      return new Response(JSON.stringify({ error: 'Internal error' }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};

function buildUserPrompt(question, cards, spreadType, lang) {
  const isZh = lang === 'zh';
  let prompt = '';

  if (question) {
    prompt += isZh
      ? `问卜者的问题：「${question}」\n\n`
      : `The querent's question: "${question}"\n\n`;
  }

  if (spreadType) {
    prompt += isZh
      ? `牌阵类型：${spreadType}\n\n`
      : `Spread type: ${spreadType}\n\n`;
  }

  prompt += isZh ? '抽到的牌：\n' : 'Cards drawn:\n';

  cards.forEach((card, idx) => {
    const orientation = card.reversed
      ? (isZh ? '逆位' : 'Reversed')
      : (isZh ? '正位' : 'Upright');
    const position = card.position || `Position ${idx + 1}`;
    prompt += `${idx + 1}. ${position}: ${card.name} (${orientation})\n`;
  });

  prompt += isZh
    ? '\n请为这次抽牌给出温暖而有洞察力的解读。'
    : '\nPlease give a warm, insightful reading for this draw.';

  return prompt;
}
