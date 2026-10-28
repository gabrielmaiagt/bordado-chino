import { getStore } from '@netlify/blobs';

// Cada etapa vista vira uma chave dia/etapa/visitante, então conta pessoas únicas
const STEPS = new Set(['landing', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'craft', 'prova', 'loading',
  'oferta', 'oferta_card', 'checkout', 'upsell', 'upsell_click', 'downsell', 'downsell_click']);

export const day = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' });

export default async (req) => {
  if (req.method !== 'POST') return new Response('', { status: 405 });
  let body;
  try { body = JSON.parse(await req.text()); } catch { return new Response('', { status: 400 }); }
  const step = String(body.s || '');
  const vid = String(body.v || '').replace(/[^a-z0-9]/gi, '').slice(0, 24);
  if (!STEPS.has(step) || !vid) return new Response('', { status: 400 });
  // Robôs e pré-visualização de link não contam
  if (/bot|crawl|spider|facebookexternalhit|preview|headless/i.test(req.headers.get('user-agent') || '') || req.headers.get('purpose') === 'prefetch')
    return new Response(null, { status: 204 });
  const src = String(body.src || '').replace(/[^\w.-]/g, '').slice(0, 40) || '-';
  await getStore('funnel').set(`${day()}/${step}/${vid}`, src);
  return new Response(null, { status: 204 });
};

export const config = { path: '/api/track' };
