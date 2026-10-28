// ====== CONFIG ======
// Link do checkout internacional (Cakto). Trocar aqui quando criar.
window.CHECKOUT_URL = 'https://pay.cakto.com.br/uqhfx7o_1241605';

// ====== IMAGENS (troque os arquivos em /img mantendo os nomes) ======
const IMG = {
  'luana-hero': ['luana-hero-420.webp 420w', 'luana-hero-698.webp 698w'],
  'luana-avatar': ['luana-avatar-160.webp 160w', 'luana-avatar-320.webp 320w'],
  'peony-hoop': ['peony-hoop-480.webp 480w', 'peony-hoop-800.webp 800w'],
  'peony-hands': ['peony-hands-480.webp 480w', 'peony-hands-800.webp 800w'],
  'student-messages': ['student-messages-480.webp 480w', 'student-messages-800.webp 800w'],
  'larissa-embroidery': ['larissa-embroidery-480.webp 480w', 'larissa-embroidery-800.webp 800w'],
  'simone-embroidery': ['simone-embroidery-480.webp 480w', 'simone-embroidery-800.webp 800w'],
  'debora-embroidery': ['debora-embroidery-480.webp 480w', 'debora-embroidery-800.webp 800w'],
  'bird-flower-embroidery': ['bird-flower-embroidery-480.webp 480w', 'bird-flower-embroidery-800.webp 800w'],
  'dog-embroidery': ['dog-embroidery-480.webp 480w', 'dog-embroidery-800.webp 800w'],
  'butterfly-embroidery': ['butterfly-embroidery-800.webp 800w'],
  'toucan-embroidery': ['toucan-embroidery-800.webp 800w'],
  'training-materials': ['lesson-follow-along-480.webp 480w', 'lesson-follow-along-800.webp 800w'],
  'training-book': ['bordado-book-480.webp 480w', 'bordado-book-800.webp 800w'],
  'patricia-profile': ['patricia-profile-96.webp 96w', 'patricia-profile-192.webp 192w'],
  'larissa-profile': ['larissa-profile-96.webp 96w', 'larissa-profile-192.webp 192w'],
  'simone-profile': ['simone-profile-96.webp 96w', 'simone-profile-192.webp 192w'],
  'debora-profile': ['debora-profile-96.webp 96w', 'debora-profile-192.webp 192w'],
  'renata-profile': ['renata-profile-96.webp 96w', 'renata-profile-192.webp 192w'],
  'ivanilde-profile': ['ivanilde-profile-192.webp 192w'],
  'helena-profile': ['helena-profile-96.webp 96w', 'helena-profile-192.webp 192w'],
  'marcia-profile': ['marcia-profile-96.webp 96w', 'marcia-profile-192.webp 192w'],
  'tatiane-profile': ['tatiane-profile-96.webp 96w', 'tatiane-profile-192.webp 192w'],
};

function img(key, { cls = '', sizes = '100vw', alt = '', eager = false } = {}) {
  const set = IMG[key].map(s => 'img/' + s);
  const src = set[set.length - 1].split(' ')[0];
  return `<img${cls ? ` class="${cls}"` : ''} src="${src}" srcset="${set.join(', ')}" sizes="${sizes}" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}/>`;
}

// Mesmas classes do botão original (shadcn + variantes do quiz)
const BTN_BASE = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
const VARIANT = { quiz: 'quiz-option', cta: 'quiz-cta', back: 'quiz-back', ghost: 'hover:bg-accent hover:text-accent-foreground' };
const SIZE = { default: 'h-9 px-4 py-2', icon: 'h-9 w-9' };
function btnClass(variant, size = 'default', extra = '') {
  return [BTN_BASE, VARIANT[variant], SIZE[size], extra].filter(Boolean).join(' ');
}

// Ícones lucide usados no original
const svg = (name, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name}" aria-hidden="true">${inner}</svg>`;
const ICON = {
  arrowLeft: svg('arrow-left', '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'),
  arrowRight: svg('arrow-right', '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
  check: svg('check', '<path d="M20 6 9 17l-5-5"/>'),
  chevronRight: svg('chevron-right', '<path d="m9 18 6-6-6-6"/>'),
  chevronLeft: svg('chevron-left', '<path d="m15 18-6-6 6-6"/>'),
  creditCard: svg('credit-card', '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>'),
  gift: svg('gift', '<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>'),
  lock: svg('lock-keyhole', '<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>'),
  shield: svg('shield-check', '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
  alert: svg('triangle-alert', '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
};

// Mantém UTMs (tráfego direto) entre quiz → plano → checkout
function withParams(url) {
  const qs = location.search.slice(1);
  if (!qs) return url;
  return url + (url.includes('?') ? '&' : '?') + qs;
}

const DISCLAIMER = 'Los resultados pueden variar según la dedicación, experiencia, disponibilidad y aplicación de cada persona. Este contenido no representa una garantía de ingresos.';
const COPYRIGHT = '© 2026 Luana Duarte · Bordados que conectan y abrazan';

// ====== MÉTRICAS DO FUNIL (/admin) ======
function track(step) {
  try {
    let v = localStorage.getItem('bc_vid');
    if (!v) { v = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('bc_vid', v); }
    const src = new URLSearchParams(location.search).get('utm_source') || '';
    navigator.sendBeacon('/api/track', JSON.stringify({ s: step, v, src }));
  } catch (e) {}
}
