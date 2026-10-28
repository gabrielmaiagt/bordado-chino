import { getStore } from '@netlify/blobs';

export default async (req) => {
  const pass = process.env.ADMIN_PASSWORD;
  if (!pass || req.headers.get('x-admin-key') !== pass) return new Response('unauthorized', { status: 401 });
  const url = new URL(req.url);
  const days = Math.min(Number(url.searchParams.get('days')) || 7, 31);
  const store = getStore('funnel');
  const out = {};
  for (let i = 0; i < days; i++) {
    const d = new Date(Date.now() - i * 864e5).toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' });
    const counts = {};
    const { blobs } = await store.list({ prefix: d + '/' });
    for (const b of blobs) {
      const step = b.key.split('/')[1];
      counts[step] = (counts[step] || 0) + 1;
    }
    out[d] = counts;
  }
  return Response.json(out);
};

export const config = { path: '/api/stats' };
