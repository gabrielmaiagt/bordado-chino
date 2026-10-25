// Cache do app para abrir rápido e funcionar offline (os vídeos precisam de internet).
// Ao mudar qualquer arquivo, suba a versão para os alunos receberem a atualização.
const VERSION = 'bc-v1';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'assets/app.css', 'js/content.js', 'js/app.js',
  'assets/dm-sans-latin-standard-normal-Bf69Tn_J.woff2', 'assets/dm-serif-display-latin-400-normal-C5_t9oOD.woff2',
  'icons/icon-192.png', 'img/luana-avatar-320.webp',
  'patrones/01-peonia.svg', 'patrones/02-rosa-y-capullos.svg', 'patrones/03-ejercicio-direccion-del-hilo.svg',
  'patrones/04-pajaro-en-rama.svg', 'patrones/05-mariposa.svg', 'patrones/06-ramito-pequeno.svg', 'patrones/07-ejercicio-degradado.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Arquivos do próprio app: rede primeiro, cache como reserva (assim atualizações chegam logo)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
