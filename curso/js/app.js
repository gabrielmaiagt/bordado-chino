// ====== Estado (progresso salvo no aparelho) ======
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
let done = new Set(store.get('bc_done', []));
const saveDone = () => store.set('bc_done', [...done]);

const ALL_SECTIONS = [...COURSE, ...BONUSES];
const LESSONS = ALL_SECTIONS.flatMap(s => s.lessons.map(l => ({ ...l, section: s })));
const COURSE_LESSONS = LESSONS.filter(l => COURSE.includes(l.section));
const findLesson = id => LESSONS.find(l => l.id === id);
const findSection = id => ALL_SECTIONS.find(s => s.id === id);
const pct = list => list.length ? Math.round(list.filter(l => done.has(l.id)).length / list.length * 100) : 0;

const view = document.getElementById('view');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ====== Componentes ======
function progressBar(p) {
  return `<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><span style="width:${p}%"></span></div>`;
}

function sectionCard(s, i, isBonus) {
  const p = pct(s.lessons);
  return `<a class="card section-card" href="#/s/${s.id}">
    <span class="section-icon" aria-hidden="true">${s.icon}</span>
    <span class="section-text">
      <small>${isBonus ? `Bono ${i + 1}` : (i === 0 ? 'Empieza aquí' : `Módulo ${i}`)} · ${s.lessons.length} ${s.lessons.length === 1 ? 'lección' : 'lecciones'}</small>
      <strong>${s.title}</strong>
      <span class="muted">${s.subtitle}</span>
      ${progressBar(p)}
    </span>
  </a>`;
}

// Vídeo leve: só carrega o YouTube ao tocar (app rápido e economiza dados)
function videoBlock(v) {
  return `<figure class="video">
    <button class="video-thumb" data-yt="${v.id}" aria-label="Reproducir: ${esc(v.t)}">
      <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy"/>
      <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
    </button>
    <figcaption>${esc(v.t)} <span class="muted">· ${esc(v.c)}</span></figcaption>
  </figure>`;
}

// ====== Telas ======
function home() {
  const last = findLesson(store.get('bc_last', '')) || COURSE_LESSONS.find(l => !done.has(l.id)) || COURSE_LESSONS[0];
  const p = pct(COURSE_LESSONS);
  return `
  <header class="hero">
    <img src="img/luana-avatar-320.webp" alt="Luana Duarte" class="avatar"/>
    <div>
      <small>Curso</small>
      <h1>Bordado Chino</h1>
      <p class="muted">con Luana Duarte</p>
    </div>
  </header>
  <section class="card resume">
    <div class="resume-top"><span>Tu progreso en el curso</span><strong>${p}%</strong></div>
    ${progressBar(p)}
    <a class="btn" href="#/l/${last.id}">${p === 0 ? 'Empezar el curso' : 'Continuar'}: ${esc(last.title)} →</a>
  </section>
  <h2 class="list-title">Módulos del curso</h2>
  <div class="list">${COURSE.map((s, i) => sectionCard(s, i)).join('')}</div>
  <a class="card promo" href="#/bonos">🎁 <span><strong>Tus 5 bonos</strong><br/><span class="muted">Aprende a vender tus piezas</span></span><span class="chev">›</span></a>
  <a class="card promo" href="#/patrones">📐 <span><strong>Plantillas para imprimir</strong><br/><span class="muted">${PATTERNS.length} patrones listos para bordar</span></span><span class="chev">›</span></a>`;
}

function sectionPage(id) {
  const s = findSection(id);
  if (!s) return notFound();
  const isBonus = BONUSES.includes(s);
  return `
  <a class="back" href="#/${isBonus ? 'bonos' : ''}">‹ ${isBonus ? 'Bonos' : 'Inicio'}</a>
  <header class="page-head"><span class="section-icon big">${s.icon}</span><h1>${s.title}</h1><p class="muted">${s.subtitle}</p>${progressBar(pct(s.lessons))}</header>
  <ol class="lesson-list">
    ${s.lessons.map((l, i) => `<li><a class="card lesson-row${done.has(l.id) ? ' is-done' : ''}" href="#/l/${l.id}">
      <span class="num">${done.has(l.id) ? '✓' : i + 1}</span>
      <span><strong>${esc(l.title)}</strong><small class="muted">${l.min} min${l.videos.length ? ` · ${l.videos.length} video${l.videos.length > 1 ? 's' : ''}` : ' · lectura'}</small></span>
    </a></li>`).join('')}
  </ol>`;
}

function lessonPage(id) {
  const l = findLesson(id);
  if (!l) return notFound();
  store.set('bc_last', id);
  const list = l.section.lessons, i = list.findIndex(x => x.id === id);
  const prev = list[i - 1], next = list[i + 1];
  const isDone = done.has(id);
  return `
  <a class="back" href="#/s/${l.section.id}">‹ ${esc(l.section.title)}</a>
  <article class="lesson">
    <small class="muted">Lección ${i + 1} de ${list.length} · ${l.min} min</small>
    <h1>${esc(l.title)}</h1>
    ${l.videos.map(videoBlock).join('')}
    <div class="prose">${l.body}</div>
    ${l.practice ? `<div class="practice"><strong>✍️ Práctica</strong><p>${l.practice}</p></div>` : ''}
    <button class="btn ${isDone ? 'btn-done' : ''}" data-toggle-done="${id}">${isDone ? '✓ Lección completada' : 'Marcar como completada'}</button>
    <nav class="pager">
      ${prev ? `<a href="#/l/${prev.id}">‹ Anterior</a>` : '<span></span>'}
      ${next ? `<a href="#/l/${next.id}">Siguiente ›</a>` : `<a href="#/${BONUSES.includes(l.section) ? 'bonos' : ''}">Volver ›</a>`}
    </nav>
  </article>`;
}

function patternsPage() {
  return `
  <header class="page-head"><span class="section-icon big">📐</span><h1>Plantillas</h1><p class="muted">Imprime en tamaño real (100%, sin ajustar a la página) o calca desde la pantalla con el brillo al máximo.</p></header>
  <div class="patterns">${PATTERNS.map(p => `
    <a class="card pattern" href="#/p/${encodeURIComponent(p.file)}">
      <img src="patrones/${p.file}" alt="${esc(p.title)}" loading="lazy"/>
      <strong>${esc(p.title)}</strong><small class="muted">${p.level}</small>
    </a>`).join('')}</div>`;
}

function patternPage(file) {
  const p = PATTERNS.find(x => x.file === decodeURIComponent(file));
  if (!p) return notFound();
  const l = findLesson(p.lesson);
  return `
  <a class="back" href="#/patrones">‹ Plantillas</a>
  <header class="page-head"><h1>${esc(p.title)}</h1><p class="muted">${p.level} · ${esc(p.desc)}</p></header>
  <div class="pattern-view"><img src="patrones/${p.file}" alt="${esc(p.title)}"/></div>
  <div class="actions">
    <a class="btn" href="patrones/${p.file}" download>Descargar</a>
    <button class="btn btn-ghost" data-print="patrones/${p.file}">Imprimir</button>
  </div>
  ${l ? `<a class="card promo" href="#/l/${l.id}">🎬 <span><strong>Lección de este patrón</strong><br/><span class="muted">${esc(l.title)}</span></span><span class="chev">›</span></a>` : ''}`;
}

function bonusesPage() {
  return `
  <header class="page-head"><span class="section-icon big">🎁</span><h1>Tus 5 bonos</h1><p class="muted">Todo lo que necesitas para vender tus bordados.</p></header>
  <div class="list">${BONUSES.map((s, i) => sectionCard(s, i, true)).join('')}</div>`;
}

function progressPage() {
  const total = LESSONS.length, n = LESSONS.filter(l => done.has(l.id)).length;
  return `
  <header class="page-head"><span class="section-icon big">🏆</span><h1>Tu progreso</h1><p class="muted">${n} de ${total} lecciones completadas</p>${progressBar(Math.round(n / total * 100))}</header>
  <div class="list">${ALL_SECTIONS.map(s => `
    <a class="card progress-row" href="#/s/${s.id}"><span>${s.icon} ${s.title}</span><strong>${pct(s.lessons)}%</strong></a>`).join('')}</div>
  ${n === total ? '<div class="card congrats">🎉 <strong>¡Felicidades! Completaste todo el curso.</strong><br/>Comparte una foto de tu peonía y sigue creando.</div>' : ''}
  <button class="btn btn-ghost" data-reset>Reiniciar progreso</button>`;
}

function notFound() { return `<p>Página no encontrada.</p><a class="btn" href="#/">Ir al inicio</a>`; }

// ====== Calculadora de preço (Bono 4) ======
function mountPriceCalc() {
  const el = document.getElementById('price-calc');
  if (!el) return;
  const saved = store.get('bc_calc', { mat: '', hrs: '', rate: '' });
  el.innerHTML = `<div class="calc">
    <label>Materiales (tela, hilos, bastidor, empaque)<input inputmode="decimal" data-k="mat" value="${saved.mat}" placeholder="Ej: 8"/></label>
    <label>Horas de trabajo<input inputmode="decimal" data-k="hrs" value="${saved.hrs}" placeholder="Ej: 10"/></label>
    <label>Valor de tu hora<input inputmode="decimal" data-k="rate" value="${saved.rate}" placeholder="Ej: 3"/></label>
    <output>Precio sugerido: <strong id="calc-out">—</strong></output>
  </div>`;
  const calc = () => {
    const v = {}; el.querySelectorAll('input').forEach(i => v[i.dataset.k] = i.value);
    store.set('bc_calc', v);
    const n = k => parseFloat(String(v[k]).replace(',', '.')) || 0;
    const price = (n('mat') + n('hrs') * n('rate')) * 1.3;
    document.getElementById('calc-out').textContent = price ? price.toLocaleString('es', { maximumFractionDigits: 2 }) : '—';
  };
  el.addEventListener('input', calc);
  calc();
}

// ====== Router ======
const TABS = { '': 'inicio', s: 'inicio', l: 'inicio', patrones: 'patrones', p: 'patrones', bonos: 'bonos', progreso: 'progreso' };
function route() {
  const [, a = '', b = ''] = location.hash.replace(/^#/, '').split('/');
  const html = a === '' ? home()
    : a === 's' ? sectionPage(b)
    : a === 'l' ? lessonPage(b)
    : a === 'patrones' ? patternsPage()
    : a === 'p' ? patternPage(b)
    : a === 'bonos' ? bonusesPage()
    : a === 'progreso' ? progressPage()
    : notFound();
  view.innerHTML = html;
  // Lição de bônus marca a aba Bonos
  const sec = a === 'l' ? findLesson(b)?.section : a === 's' ? findSection(b) : null;
  const tab = sec && BONUSES.includes(sec) ? 'bonos' : TABS[a];
  document.querySelectorAll('.tabbar a').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  mountPriceCalc();
  window.scrollTo(0, 0);
}

document.addEventListener('click', e => {
  const yt = e.target.closest('[data-yt]');
  if (yt) {
    yt.outerHTML = `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${yt.dataset.yt}?autoplay=1&rel=0&hl=es" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
    return;
  }
  const t = e.target.closest('[data-toggle-done]');
  if (t) {
    const id = t.dataset.toggleDone;
    done.has(id) ? done.delete(id) : done.add(id);
    saveDone();
    t.classList.toggle('btn-done', done.has(id));
    t.textContent = done.has(id) ? '✓ Lección completada' : 'Marcar como completada';
    return;
  }
  const pr = e.target.closest('[data-print]');
  if (pr) {
    const w = window.open('', '_blank');
    if (w) {
      w.document.write(`<title>Imprimir plantilla</title><style>@page{margin:10mm}body{margin:0;text-align:center}img{width:150mm;height:auto}</style><img src="${location.href.split('#')[0].replace(/[^/]*$/, '')}${pr.dataset.print}" onload="setTimeout(()=>print(),300)"/>`);
      w.document.close();
    }
    return;
  }
  if (e.target.closest('[data-reset]')) {
    done = new Set(); saveDone(); route();
  }
});

window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
