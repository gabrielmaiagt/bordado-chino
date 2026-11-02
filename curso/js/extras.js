// Conteúdo dos order bumps e do upsell (Taller que Vende). Fica liberado pra todas as alunas.

// 30 paletas: [nome, uso, [5 tons do mais claro ao mais escuro]]
const PALETTES = [
  ['Peonía rosa', 'Peonías y rosas clásicas', ['#fbe3ea', '#f5b8c8', '#ec8aa5', '#d45d82', '#a33a5e']],
  ['Peonía coral', 'Flores cálidas y alegres', ['#fde4d8', '#f9b9a0', '#f28b6c', '#dc6447', '#a8432e']],
  ['Cerezo', 'Flores de cerezo y ramitas', ['#fff1f3', '#fbd3dc', '#f4a9bb', '#e07f98', '#7a4a3a']],
  ['Lavanda', 'Lavanda, lilas y glicinas', ['#f1ecf8', '#d6c8ec', '#b6a0db', '#8e74c0', '#5e4a8c']],
  ['Glicina', 'Racimos que cuelgan', ['#ede9fb', '#c9bff2', '#a294e3', '#7a6cc9', '#4f4593']],
  ['Hoja tierna', 'Hojas jóvenes y brotes', ['#eef6df', '#cfe6a8', '#a9d073', '#7fae4a', '#557a2e']],
  ['Hoja profunda', 'Hojas de peonía y follaje', ['#dfeee3', '#a9d1b4', '#6fae84', '#3f8358', '#235a39']],
  ['Bambú', 'Bambú y tallos', ['#f0f3d9', '#d7e2a3', '#b3c96b', '#86a43f', '#566f24']],
  ['Petirrojo', 'Pechos de pájaros cálidos', ['#fde9d9', '#f8c39c', '#ef9a62', '#d26e35', '#8f4520']],
  ['Martín pescador', 'Plumas azul turquesa', ['#ddf3f5', '#a3dfe5', '#5dc0cc', '#2394a6', '#105f70']],
  ['Golondrina', 'Alas oscuras con brillo', ['#e4e8ef', '#b4bfcf', '#7d8ca6', '#4c5b78', '#262f45']],
  ['Faisán dorado', 'Colas y plumas de lujo', ['#fff4d6', '#fde09a', '#f6c04f', '#d9952a', '#9c5f16']],
  ['Mariposa monarca', 'Alas naranjas con borde', ['#fff0d9', '#ffd08a', '#f9a23d', '#d9701a', '#3a2a22']],
  ['Mariposa azul', 'Alas azul cielo', ['#e3f0fd', '#b0d4f7', '#73b0ec', '#3e85d1', '#1f5596']],
  ['Cielo al amanecer', 'Fondos y paisajes suaves', ['#fdf1e6', '#f9d7c4', '#e9c0d2', '#b8b5de', '#8a9bd2']],
  ['Montaña en niebla', 'Paisajes chinos tradicionales', ['#f1f2f1', '#d5d9d8', '#aab3b2', '#788584', '#4a5655']],
  ['Lago de loto', 'Agua y hojas de loto', ['#e3f4ef', '#b4e1d5', '#7cc6b4', '#47a08b', '#26705f']],
  ['Loto', 'Flor de loto', ['#fff3f6', '#fcd6e1', '#f5aac2', '#e47b9f', '#b64f74']],
  ['Crisantemo', 'Crisantemos amarillos', ['#fffbe0', '#fff0a3', '#ffdc5c', '#f2b81c', '#b8800a']],
  ['Girasol', 'Girasoles y flores de campo', ['#fff6cf', '#ffe27a', '#f8c22f', '#d99412', '#6b4a1e']],
  ['Ciruelo', 'Flores de ciruelo de invierno', ['#fbe6ec', '#f0b4c6', '#d9799a', '#b04a72', '#5b3b30']],
  ['Uva y vino', 'Frutas y tonos elegantes', ['#f3e3ee', '#dcb0cf', '#b9779f', '#8a476f', '#56243f']],
  ['Melocotón', 'Duraznos y frutas', ['#fff0e4', '#ffd3b5', '#fbb183', '#ee8c5d', '#c6633e']],
  ['Gato atigrado', 'Pelaje naranja y crema', ['#fdf3e3', '#f6d7aa', '#e8b46c', '#c98840', '#8a5a26']],
  ['Gato gris', 'Pelaje gris y plateado', ['#f4f4f4', '#d9d9d9', '#b0b0b0', '#7e7e7e', '#4a4a4a']],
  ['Perrito café', 'Mascotas en tonos café', ['#f6ebe0', '#e2c6a6', '#c49a6c', '#946b41', '#5c3f24']],
  ['Rojo imperial', 'Piezas festivas y tradicionales', ['#fde4e1', '#f6a9a1', '#e5615a', '#c22e2d', '#7f1517']],
  ['Jade', 'Detalles orientales y marcos', ['#e2f3ea', '#ade0c4', '#6cc39b', '#2f9a6e', '#156246']],
  ['Navidad suave', 'Regalos y temporada de fiestas', ['#f6efe6', '#e7c9a0', '#c94b4b', '#3d7a52', '#204a30']],
  ['Novia', 'Bodas, bautizos y blancos', ['#ffffff', '#f7f3ec', '#ece3d3', '#d8c9ae', '#b7a17d']],
];

const palettesHTML = () => `<div class="palettes">${PALETTES.map(([name, use, tones], i) => `
<div class="palette">
  <div class="swatches">${tones.map(c => `<span style="background:${c}" title="${c}"></span>`).join('')}</div>
  <strong>${i + 1}. ${name}</strong><small>${use}</small>
</div>`).join('')}</div>`;


// Láminas de domínio público (livros de moldes de 1850 e 1875, Sterling and Francine Clark Art Institute Library, via Internet Archive)
const LAMINAS_GRANDES = ['b_8.webp', 'b_20.webp', 'b_22.webp', 'b_26.webp', 'b_28.webp', 'b_30.webp', 'b_32.webp', 'b_34.webp', 'b_36.webp', 'b_38.webp', 'b_40.webp', 'b_42.webp', 'b_44.webp', 'b_46.webp', 'b_48.webp', 'b_50.webp', 'b_52.webp', 'b_54.webp', 'b_56.webp', 'b_60.webp', 'b_62.webp', 'b_64.webp', 'b_66.webp', 'b_70.webp', 'b_72.webp', 'b_74.webp', 'b_76.webp', 'b_78.webp', 'b_80.webp', 'b_82.webp', 'b_84.webp', 'b_86.webp', 'b_88.webp', 'b_92.webp', 'b_94.webp', 'b_98.webp', 'b_100.webp', 'b_104.webp', 'b_106.webp', 'b_108.webp', 'b_110.webp', 'b_114.webp', 'b_118.webp', 'b_136.webp', 'b_138.webp', 'b_140.webp', 'b_142.webp', 'b_144.webp', 'b_146.webp', 'b_148.webp', 'b_150.webp', 'b_152.webp', 'b_154.webp'];
const LAMINAS_MOTIVOS = ['a_4.webp', 'a_6.webp', 'a_8.webp', 'a_218.webp', 'a_219.webp', 'a_220.webp', 'a_221.webp', 'a_222.webp', 'a_223.webp', 'a_224.webp', 'a_225.webp', 'a_226.webp', 'a_227.webp', 'a_228.webp', 'a_229.webp', 'a_230.webp', 'a_231.webp', 'a_232.webp', 'a_233.webp', 'a_234.webp', 'a_235.webp', 'a_236.webp', 'a_237.webp', 'a_238.webp', 'a_239.webp', 'a_240.webp', 'a_241.webp', 'a_242.webp', 'a_243.webp', 'a_244.webp', 'a_245.webp', 'a_246.webp', 'a_247.webp', 'a_248.webp', 'a_249.webp', 'a_250.webp', 'a_251.webp', 'a_252.webp', 'a_253.webp', 'a_254.webp', 'a_255.webp', 'a_256.webp', 'a_257.webp', 'a_258.webp'];
const laminasHTML = list => `<div class="laminas">${list.map((f, i) => `
<a class="lamina" href="laminas/${f}" target="_blank" rel="noopener"><img src="laminas/${f}" alt="Lámina ${i + 1}" loading="lazy"/><span>Lámina ${i + 1}</span></a>`).join('')}</div>`;

const EXTRAS = [
  {
    id: 'x1', icon: '🩹', title: 'Guía de Errores y Correcciones', subtitle: 'Los errores más comunes y cómo arreglar cada uno',
    lessons: [
      {
        id: 'x1-1', title: 'Errores de preparación', min: 8, videos: [],
        body: `
<p>La mitad de los problemas de un bordado empiezan <strong>antes de la primera puntada</strong>. Revisa esta lista antes de cada pieza.</p>
<table class="plan">
<tr><th>La tela se arruga alrededor de las puntadas</th><td><strong>Por qué:</strong> la tela estaba floja en el bastidor o jalaste demasiado el hilo.<br/><strong>Cómo corregir:</strong> vuelve a tensar la tela hasta que suene como tambor. Si ya bordaste, humedece un poco el revés y plancha con una toalla debajo.</td></tr>
<tr><th>Se ven las marcas del dibujo</th><td><strong>Por qué:</strong> calcaste con una línea gruesa o bordaste justo al lado de la línea.<br/><strong>Cómo corregir:</strong> calca con línea fina y borda <em>encima</em> de la línea, un pelito por fuera. Marcador de agua: pasa un hisopo húmedo. Grafito: goma de borrar blanda.</td></tr>
<tr><th>El hilo se enreda y hace nudos</th><td><strong>Por qué:</strong> hebra muy larga o hilo torcido.<br/><strong>Cómo corregir:</strong> usa hebras del largo de tu antebrazo. Cada tanto deja colgar la aguja para que el hilo se destuerza solo.</td></tr>
<tr><th>Las hebras se ven gruesas y toscas</th><td><strong>Por qué:</strong> usaste las 6 hebras juntas.<br/><strong>Cómo corregir:</strong> para pintar con hilo usa 1 o 2 hebras. Sepáralas una por una y vuelve a juntarlas.</td></tr>
<tr><th>Marca del bastidor en la tela</th><td><strong>Por qué:</strong> dejaste la tela en el bastidor muchos días.<br/><strong>Cómo corregir:</strong> quita el bastidor cuando no bordes. Para borrar la marca, humedece y plancha por el revés.</td></tr>
</table>`,
        practice: 'Antes de tu próxima pieza, revisa los 5 puntos de esta tabla.',
      },
      {
        id: 'x1-2', title: 'Errores de puntada y color', min: 10, videos: [],
        body: `
<table class="plan">
<tr><th>El degradado se ve en "rayas"</th><td><strong>Por qué:</strong> las puntadas de un tono terminan todas a la misma altura.<br/><strong>Cómo corregir:</strong> alterna puntadas largas y cortas y mete el tono nuevo <em>dentro</em> del anterior, partiendo la puntada de abajo.</td></tr>
<tr><th>El pétalo se ve plano</th><td><strong>Por qué:</strong> todas las puntadas van en la misma dirección.<br/><strong>Cómo corregir:</strong> dibuja líneas guía que salgan del centro de la flor y gira las puntadas siguiendo esas líneas.</td></tr>
<tr><th>Los bordes quedan disparejos</th><td><strong>Por qué:</strong> empezaste a rellenar sin contorno.<br/><strong>Cómo corregir:</strong> haz primero un punto atrás o punto partido en el borde y cubre ese contorno con las puntadas de relleno.</td></tr>
<tr><th>Se ve la tela entre las puntadas</th><td><strong>Por qué:</strong> puntadas muy separadas.<br/><strong>Cómo corregir:</strong> haz una segunda pasada en los huecos con el mismo tono, entrando entre las puntadas que ya están.</td></tr>
<tr><th>Puntadas muy largas que se mueven</th><td><strong>Por qué:</strong> en relleno, las puntadas de más de 1 cm se aflojan.<br/><strong>Cómo corregir:</strong> divídelas en dos o fíjalas con una puntadita casi invisible del mismo color.</td></tr>
<tr><th>Los colores "brincan"</th><td><strong>Por qué:</strong> saltaste del tono más claro al más oscuro.<br/><strong>Cómo corregir:</strong> agrega un tono intermedio. Usa las paletas de este curso: cada tono está a un paso del siguiente.</td></tr>
<tr><th>Me equivoqué y quiero deshacer</th><td><strong>Cómo corregir:</strong> corta las puntadas por el revés con tijera de punta fina y saca los pedacitos con pinzas. Nunca jales desde el frente: deformas la tela.</td></tr>
</table>
<div class="tip">💡 Un error que se ve de cerca casi nunca se ve a un metro. Antes de deshacer, aléjate y mira la pieza completa.</div>`,
        practice: 'Elige el pétalo que menos te gustó de tu muestrario y corrígelo con esta guía.',
      },
    ],
  },
  {
    id: 'x2', icon: '🎨', title: '30 Paletas de Colores Profesionales', subtitle: 'Combinaciones listas: solo elige y borda',
    lessons: [
      {
        id: 'x2-1', title: 'Cómo usar las paletas', min: 4, videos: [],
        body: `
<p>Cada paleta tiene <strong>5 tonos, del más claro al más oscuro</strong>. Es exactamente lo que necesitas para un degradado de bordado chino.</p>
<ol>
<li><strong>Elige la paleta</strong> según lo que vas a bordar (flor, pájaro, mascota, paisaje).</li>
<li><strong>Lleva la pantalla a la mercería</strong> y busca hilos parecidos, uno al lado del otro. Lo importante es que cada tono sea un paso más oscuro que el anterior.</li>
<li><strong>Tono 1</strong> va donde pega la luz (bordes del pétalo, pecho del pájaro). <strong>Tono 5</strong> va en la sombra (centro de la flor, debajo de las alas).</li>
</ol>
<div class="tip">💡 El brillo de cada pantalla es distinto. Usa las paletas como guía y elige con tus ojos, con luz natural.</div>`,
      },
      {
        id: 'x2-2', title: 'Las 30 paletas', min: 6, videos: [],
        body: palettesHTML(),
        practice: 'Elige 3 paletas para tus próximas piezas y compra los hilos de una de ellas.',
      },
    ],
  },
  {
    id: 'x4', icon: '📐', title: '+300 Plantillas Listas', subtitle: 'Diseños clásicos para imprimir y bordar',
    lessons: [
      {
        id: 'x4-1', title: 'Cómo usar las láminas', min: 4, videos: [],
        body: `
<p>Aquí tienes <strong>láminas con más de 300 diseños</strong> de bordado: flores, ramos, hojas, bordes, esquinas y motivos pequeños. Son diseños clásicos de libros de bordado antiguos, restaurados para que los puedas imprimir.</p>
<ol>
<li><strong>Toca una lámina</strong> para abrirla en tamaño completo.</li>
<li><strong>Imprímela o guárdala</strong> en tu celular (mantén el dedo sobre la imagen y elige "Guardar").</li>
<li><strong>Elige el diseño</strong> que quieras de la lámina. Muchas láminas traen varios diseños: puedes bordar uno solo.</li>
<li><strong>Ajusta el tamaño</strong> al imprimir para que quepa en tu bastidor, y pásalo a la tela como en la lección <em>Pasar la plantilla a la tela</em>.</li>
<li><strong>Dale color</strong> con una de las 30 paletas.</li>
</ol>
<div class="tip">💡 Los motivos pequeños son ideales para servilletas, toallas y recuerdos. Los bordes y esquinas quedan preciosos en cojines, manteles y cuellos de blusa.</div>`,
      },
      {
        id: 'x4-2', title: 'Diseños grandes: ramos, bordes y esquinas', min: 10, videos: [],
        body: laminasHTML(LAMINAS_GRANDES),
        practice: 'Elige un ramo o una esquina y bórdalo en un cojín o un mantel.',
      },
      {
        id: 'x4-3', title: 'Motivos pequeños: flores, hojas y adornos', min: 10, videos: [],
        body: laminasHTML(LAMINAS_MOTIVOS),
        practice: 'Elige 3 motivos pequeños y bórdalos en servilletas o en una toalla.',
      },
    ],
  },
  {
    id: 'x3', icon: '🛍️', title: 'Taller que Vende', subtitle: 'Todo listo para hacer tu primera venta',
    lessons: [
      {
        id: 'x3-1', title: 'Mi Primer Pedido: ruta de 7 días', min: 6, videos: [],
        body: `
<p>Sigue un paso por día. Al final de la semana tienes una pieza lista, con precio, fotos y publicada.</p>
<table class="plan">
<tr><th>Día 1</th><td><strong>Elige la pieza.</strong> Algo chico y rápido: un bastidor de 10 a 15 cm con una flor o un ramito. Lo pequeño se vende más fácil.</td></tr>
<tr><th>Día 2</th><td><strong>Calcula el precio</strong> con la Calculadora del Precio Justo (lección de este taller).</td></tr>
<tr><th>Día 3</th><td><strong>Borda o termina la pieza.</strong> Si ya tienes una pieza hecha, úsala.</td></tr>
<tr><th>Día 4</th><td><strong>Toma las fotos</strong> siguiendo "Fotos que Lucen".</td></tr>
<tr><th>Día 5</th><td><strong>Publica en 2 vitrinas:</strong> tu estado de WhatsApp y Facebook Marketplace.</td></tr>
<tr><th>Día 6</th><td><strong>Escribe a 10 personas</strong> que conoces con el mensaje modelo de abajo.</td></tr>
<tr><th>Día 7</th><td><strong>Responde, anota pedidos</strong> y confirma plazos. Si nadie compró todavía, publica de nuevo con otra foto.</td></tr>
</table>
<h3>Mensaje modelo (día 6)</h3>
<p class="quote">"¡Hola, [nombre]! Estoy haciendo bordados a mano y terminé esta pieza 🌸 La hago por encargo, con el color y el tamaño que quieras. Si te gusta para ti o para regalar, me avisas y te paso los detalles."</p>`,
        practice: 'Marca hoy en tu calendario los 7 días de la ruta.',
      },
      {
        id: 'x3-2', title: 'Vitrinas para Tu Bordado', min: 5, videos: [],
        body: `
<p>Los lugares donde publicar tus piezas, del más fácil al que da más trabajo:</p>
<ul class="check">
<li><strong>Estado de WhatsApp:</strong> lo ven tus contactos, gratis, y responden directo a tu chat.</li>
<li><strong>Facebook Marketplace:</strong> gente de tu ciudad buscando regalos. Publica con 3 fotos y precio.</li>
<li><strong>Grupos de Facebook</strong> de tu colonia, ciudad o de mamás: muy buenos para encargos.</li>
<li><strong>Instagram:</strong> tu catálogo. Fija arriba tus 3 mejores piezas.</li>
<li><strong>Bazares y ferias</strong> de artesanía: vendes en persona y te llevas contactos.</li>
<li><strong>Tiendas de regalos y cafeterías:</strong> ofrece dejar piezas a consignación (te pagan cuando se venden).</li>
<li><strong>Mercado Libre:</strong> llega a todo el país; ideal cuando ya tienes piezas repetibles.</li>
</ul>
<div class="tip">💡 Empieza por 2 vitrinas y hazlo bien. Es mejor publicar seguido en 2 lugares que una vez en 7.</div>`,
        practice: 'Elige tus 2 vitrinas y publica tu primera pieza en las dos.',
      },
      {
        id: 'x3-3', title: 'Redes Sociales que Venden', min: 7, videos: [],
        body: `
<h3>10 ideas de publicación</h3>
<ol>
<li>Antes y después: la tela en blanco y la pieza terminada.</li>
<li>Video corto de tus manos bordando (10 a 15 segundos).</li>
<li>Detalle de cerca: que se vean las puntadas.</li>
<li>La pieza en su lugar: en una pared, en un cojín, en las manos de quien la recibió.</li>
<li>"¿Cuál prefieres?": dos colores de la misma pieza.</li>
<li>Cuántas horas lleva una pieza.</li>
<li>Tu rincón de trabajo y tus hilos.</li>
<li>El empaque listo para entregar.</li>
<li>Foto que te mandó una clienta (con su permiso).</li>
<li>"Abro 5 encargos para [fecha especial]".</li>
</ol>
<h3>Textos listos para copiar</h3>
<p class="quote">"Cada puntada hecha a mano, con hilo y paciencia 🧵 Esta peonía llevó [X] horas. ¿Te gustaría una para tu casa o para regalar? Escríbeme y la hacemos a tu gusto."</p>
<p class="quote">"Abrí [X] lugares para encargos de [Día de las Madres / Navidad]. Personalizo colores y nombres. Pide el tuyo por mensaje 💌"</p>
<p class="quote">"Lo que empezó como mi momento de calma se volvió piezas que acompañan a otras personas. Gracias a cada una que confía en mi trabajo 🌸"</p>`,
        practice: 'Programa 3 publicaciones para esta semana usando las ideas 1, 2 y 10.',
      },
      {
        id: 'x3-4', title: 'Fotos que Lucen', min: 5, videos: [],
        body: `
<ul class="check">
<li><strong>Luz:</strong> junto a una ventana, sin sol directo. Apaga las luces del cuarto (mezclan colores).</li>
<li><strong>Fondo:</strong> liso y claro: lino, madera o una cartulina.</li>
<li><strong>3 fotos siempre:</strong> pieza entera, detalle de las puntadas y la pieza en un ambiente.</li>
<li><strong>De frente:</strong> celular paralelo al bastidor para que no se vea ovalado.</li>
<li><strong>Sin zoom digital:</strong> acércate con el celular, no con los dedos.</li>
<li><strong>Edición mínima:</strong> solo un poco de brillo. Si cambias los colores, la clienta recibe algo distinto a lo que vio.</li>
</ul>
<div class="tip">💡 Pon algo que dé escala: unas tijeras, una taza o tu mano. Así se entiende el tamaño de la pieza.</div>`,
        practice: 'Toma las 3 fotos de tu mejor pieza siguiendo la lista.',
      },
      {
        id: 'x3-5', title: 'Detalles que Enamoran', min: 5, videos: [],
        body: `
<h3>Empaque que se recuerda (y cuesta poco)</h3>
<ul>
<li>Papel de seda envolviendo la pieza.</li>
<li>Una cinta o cordón de yute.</li>
<li>Tarjeta con tu marca, el nombre de la pieza y "hecho a mano".</li>
<li>Una nota escrita a mano con el nombre de la clienta.</li>
</ul>
<h3>Tarjeta de cuidados (para imprimir)</h3>
<p class="quote">"Tu bordado fue hecho a mano, puntada por puntada. Para que dure muchos años: evita el sol directo, no lo laves en lavadora y, si necesitas limpiarlo, hazlo con agua fría y jabón neutro, sin tallar. Gracias por elegir algo hecho con el corazón."</p>
<h3>Atención que hace volver</h3>
<ul>
<li>Responde rápido y confirma el plazo por escrito.</li>
<li>Manda una foto de la pieza antes de entregarla.</li>
<li>Una semana después, pregunta cómo quedó en su casa.</li>
</ul>`,
        practice: 'Arma un empaque de prueba con lo que tengas en casa y tómale foto.',
      },
      {
        id: 'x3-6', title: 'Calculadora del Precio Justo', min: 6, videos: [],
        body: `
<p>Vender no es lo mismo que ganar. Esta calculadora suma <strong>todo</strong> lo que cuesta tu pieza para que no cobres de menos. Usa la moneda de tu país.</p>
<div id="fair-calc"></div>
<div class="tip">💡 Si el precio te parece alto, no bajes tu hora: elige una pieza más pequeña o más rápida.</div>`,
        practice: 'Calcula el precio de tus 3 piezas principales y anótalo.',
      },
      {
        id: 'x3-7', title: 'Plan de Ingresos', min: 5, videos: [],
        body: `
<p>Simula cuánto te queda al mes según cuántas piezas puedes hacer. Usa el precio que sacaste en la calculadora anterior.</p>
<div id="income-calc"></div>
<div class="tip">💡 Empieza con una meta pequeña y realista. Es mejor cumplir 4 piezas al mes que prometer 20 y quedar mal.</div>`,
        practice: 'Define tu meta de piezas para el próximo mes.',
      },
      {
        id: 'x3-8', title: 'Mapa de Proveedores', min: 5, videos: [],
        body: `
<p>Dónde comprar tus materiales y qué buscar:</p>
<table class="plan">
<tr><th>Mercerías de tu ciudad</th><td>Lo mejor para hilos: ves los tonos en persona. Pide "hilo mouliné" o "hilo para bordar de algodón".</td></tr>
<tr><th>Mercado Libre</th><td>Busca "hilo mouliné set", "bastidor de madera 15 cm", "agujas para bordar" y "marcador borrable para tela". Compara opiniones antes de comprar.</td></tr>
<tr><th>Tiendas de telas</th><td>Pide manta, lino o "loneta delgada" en colores claros. Un medio metro alcanza para varias piezas.</td></tr>
<tr><th>Tiendas de manualidades</th><td>Bastidores, fieltro para cerrar el revés, cintas y papel de seda para empaque.</td></tr>
<tr><th>Compra por mayoreo</th><td>Cuando ya vendas seguido, compra hilos y bastidores en paquete: el costo por pieza baja mucho.</td></tr>
</table>
<div class="tip">💡 Anota cuánto pagaste por cada material. Esos números van directo a tu Calculadora del Precio Justo.</div>`,
        practice: 'Arma tu lista de compras con precios de 2 lugares distintos.',
      },
      {
        id: 'x3-9', title: '🎁 Bono sorpresa: mensajes para vender por WhatsApp', min: 5, videos: [],
        body: `
<p>Respuestas listas para copiar en cada momento de la venta.</p>
<h3>Cuando te preguntan el precio</h3>
<p class="quote">"¡Gracias por escribirme! 🌸 Esta pieza mide [X] cm y está bordada a mano. Su precio es [X]. La puedo hacer en los colores que quieras. ¿Es para ti o para regalar?"</p>
<h3>Para confirmar el pedido</h3>
<p class="quote">"¡Perfecto! Te confirmo: [pieza], en [colores], para el día [fecha]. Para empezar te pido un anticipo de [50%] y el resto al entregar."</p>
<h3>Cuando está lista</h3>
<p class="quote">"¡Tu bordado está listo! Te mando unas fotos 📸 ¿Cómo prefieres recibirlo?"</p>
<h3>Una semana después</h3>
<p class="quote">"¡Hola! ¿Cómo quedó tu bordado en casa? Si me mandas una foto me haces el día 💐"</p>`,
        practice: 'Guarda estos mensajes como respuestas rápidas en WhatsApp Business.',
      },
    ],
  },
];
