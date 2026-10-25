// Conteúdo do app. Cada vídeo foi verificado como incorporável (oEmbed 200) em 2026-10-25.
// v = { id, t: título, c: canal }

const COURSE = [
  {
    id: 'm0', icon: '🌸', title: 'Bienvenida', subtitle: 'Qué es el bordado chino y cómo aprovechar este curso',
    lessons: [
      {
        id: 'm0-1', title: 'El arte de las diez mil agujas', min: 8,
        videos: [
          { id: 'Z4S5mkK6FRU', t: 'Bordado de Suzhou: el arte de las diez mil agujas', c: 'China Built Heritage' },
          { id: 'fSv0bXxoty0', t: 'Aprendiendo bordado de 2000 años en Zhenhu', c: 'Lansei in China' },
        ],
        body: `
<p>El <strong>bordado chino</strong> (en especial el estilo <strong>Su Xiu</strong>, de la ciudad de Suzhou) tiene más de 2.000 años de historia. Es famoso por algo que vas a aprender aquí: <strong>pintar con hilo</strong>. En vez de rellenar una forma con un solo color, se usan muchas puntadas finas, en varios tonos, que se mezclan como si fueran pinceladas.</p>
<p>Por eso las piezas parecen pinturas: los pétalos tienen luz y sombra, las plumas de los pájaros se ven suaves y los colores pasan de uno a otro sin cortes.</p>
<h3>Lo que lo hace especial</h3>
<ul>
<li><strong>Puntadas largas y cortas</strong> que se mezclan entre sí (la base de todo).</li>
<li><strong>Dirección del hilo:</strong> cada puntada sigue la forma natural del pétalo, la hoja o la pluma.</li>
<li><strong>Degradado:</strong> se trabaja con 3 a 6 tonos del mismo color.</li>
<li><strong>Hilos finos:</strong> tradicionalmente seda dividida en hebras muy finas. Tú puedes empezar con hilo mouliné de algodón separado en 1 o 2 hebras, que da un resultado precioso y es fácil de conseguir.</li>
</ul>
<div class="tip">💡 No necesitas seda ni materiales caros para empezar. Todo lo de este curso se puede hacer con hilo mouliné común.</div>
<p>Mira los videos de esta lección para inspirarte. No intentes copiar todavía: solo observa cómo las bordadoras dividen el hilo y cómo cada puntada sigue la forma del dibujo.</p>`,
      },
      {
        id: 'm0-2', title: 'Cómo usar esta app y tu plan de 4 semanas', min: 5, videos: [],
        body: `
<p>Este curso está organizado para que avances <strong>a tu ritmo</strong>, pero si quieres una guía, este es el plan que recomendamos:</p>
<table class="plan">
<tr><th>Semana 1</th><td>Módulos 1 y 2: materiales, preparar el bastidor y las puntadas esenciales. Haz el muestrario.</td></tr>
<tr><th>Semana 2</th><td>Módulos 3 y 6: pintura con hilo y color. Haz los ejercicios de dirección y degradado.</td></tr>
<tr><th>Semana 3</th><td>Módulo 4: tu primera peonía completa.</td></tr>
<tr><th>Semana 4</th><td>Módulos 5, 7 y 8: aves, relieve y el acabado profesional de tu pieza.</td></tr>
</table>
<h3>Cómo funciona cada lección</h3>
<ol>
<li><strong>Lee la explicación</strong>: ahí está el paso a paso y los trucos.</li>
<li><strong>Mira el video</strong>: verás la técnica en las manos de una bordadora.</li>
<li><strong>Haz la práctica</strong> del final.</li>
<li>Marca <strong>"Lección completada"</strong> para ver tu avance en la pestaña <em>Progreso</em>.</li>
</ol>
<div class="tip">📲 <strong>Instala la app en tu celular:</strong> en Android toca el menú ⋮ del navegador y elige <em>"Instalar app"</em> o <em>"Agregar a pantalla de inicio"</em>. En iPhone, toca el botón <em>Compartir</em> y luego <em>"Agregar a inicio"</em>.</div>
<p>Las <strong>plantillas</strong> están en la pestaña <em>Patrones</em>, listas para imprimir o calcar desde la pantalla. Los <strong>5 bonos</strong> para vender tus piezas están en la pestaña <em>Bonos</em>.</p>`,
        practice: 'Elige un rincón con buena luz natural para bordar y deja ahí tu kit. Tener un espacio listo hace que practiques mucho más.',
      },
    ],
  },
  {
    id: 'm1', icon: '🧵', title: 'Materiales y preparación', subtitle: 'Todo lo que necesitas y cómo dejarlo listo',
    lessons: [
      {
        id: 'm1-1', title: 'Tu kit básico (sin gastar de más)', min: 15,
        videos: [{ id: 'TTkFQtPlmgc', t: 'Materiales básicos de bordado a mano', c: 'Tejiendo Raíces x Gabi Goitia' }],
        body: `
<h3>Lista de compras</h3>
<ul class="check">
<li><strong>Bastidor de madera o plástico</strong> de 15 cm (el tamaño de nuestras plantillas). Uno de 10 cm para piezas pequeñas es opcional.</li>
<li><strong>Tela:</strong> algodón liso de trama cerrada, lino o mezcla lino-algodón, en color claro (blanco, crudo, beige). Evita telas elásticas.</li>
<li><strong>Hilo mouliné</strong> (algodón de 6 hebras). Empieza con estos grupos: 4 tonos de rosa (del más claro al más oscuro), 3 tonos de verde, 1 amarillo, 1 marrón y 1 blanco.</li>
<li><strong>Agujas de bordar</strong> (tipo "embroidery" o "crewel") números 9 y 10: finas y con ojo alargado.</li>
<li><strong>Tijera pequeña</strong> de punta fina.</li>
<li><strong>Marcador para tela</strong> que se borra con agua o con calor, o un lápiz de grafito suave.</li>
</ul>
<h3>Opcional pero útil</h3>
<ul>
<li>Enhebrador.</li>
<li>Entretela fina adhesiva (estabiliza telas delgadas).</li>
<li>Una lupa o lentes de aumento si bordas detalles muy pequeños.</li>
</ul>
<div class="tip">💡 Compra los tonos de un mismo color <strong>juntos, mirándolos uno al lado del otro</strong>. Lo importante para el degradado es que cada tono sea un paso más claro u oscuro que el anterior.</div>`,
        practice: 'Arma tu kit. Ordena tus hilos por familias de color, del más claro al más oscuro, y anota el número de cada uno.',
      },
      {
        id: 'm1-2', title: 'Cómo tensar la tela en el bastidor', min: 10,
        videos: [{ id: 'O73CDN5nvsU', t: '¿Cómo tensar la tela en el bastidor? 3 trucos', c: 'Aprende con Momovipro' }],
        body: `
<p>Para pintar con hilo la tela tiene que quedar <strong>tensa como un tambor</strong>. Si está floja, las puntadas se arrugan y el degradado se ve desparejo.</p>
<ol>
<li>Afloja el tornillo y separa los dos aros.</li>
<li>Pon el aro interior sobre la mesa, encima la tela (con el dibujo centrado) y luego presiona el aro exterior.</li>
<li>Tira de la tela suavemente por los bordes, alrededor, como si estiraras un tambor. Hazlo de a poco, siguiendo el hilo recto de la tela para no deformar el dibujo.</li>
<li>Aprieta el tornillo y vuelve a tensar.</li>
</ol>
<div class="tip">💡 Truco: envuelve el aro interior con cinta de algodón (cinta bies). Así la tela no se resbala y no se marca.</div>
<p>Revisa la tensión cada vez que retomes el bordado: la tela se afloja con el uso.</p>`,
        practice: 'Monta tu tela en el bastidor y golpéala con el dedo: tiene que sonar como un pequeño tambor.',
      },
      {
        id: 'm1-3', title: 'Pasar la plantilla a la tela', min: 10,
        videos: [{ id: 'BAbCRXbb3rg', t: '¿Cómo pasar un dibujo a la tela para bordar? El método más fácil', c: 'Bordadora Urbana' }],
        body: `
<p>Las plantillas de esta app (pestaña <em>Patrones</em>) ya vienen en el tamaño de un bastidor de 15 cm. Tienes tres formas de pasarlas:</p>
<h3>1. Calcar a contraluz (la más fácil)</h3>
<p>Imprime la plantilla, pégala con cinta en una ventana con luz del día, pon la tela encima y repasa las líneas con el marcador. Si no tienes impresora, sube el brillo del celular al máximo, abre la plantilla y calca directamente sobre la pantalla (con cuidado y presionando muy poco).</p>
<h3>2. Papel de calco para tela</h3>
<p>Pones el papel de calco entre la tela y la plantilla y repasas con un bolígrafo. Útil para telas oscuras.</p>
<h3>3. Entretela soluble</h3>
<p>Imprimes o dibujas sobre entretela soluble en agua, la pegas sobre la tela y bordas encima. Al final se disuelve con agua.</p>
<div class="tip">⚠️ Marca líneas <strong>finas y suaves</strong>. En el bordado chino las puntadas finas no siempre tapan una línea gruesa.</div>`,
        practice: 'Pasa la plantilla "Ejercicio: dirección del hilo" a tu tela. La vas a usar en el Módulo 3.',
      },
      {
        id: 'm1-4', title: 'Separar las hebras sin enredos', min: 5,
        videos: [{ id: 'qz4t-imt2zA', t: 'Cómo separar los hilos del hilo de bordar sin enredos', c: 'Cutesy Crafts' }],
        body: `
<p>El hilo mouliné viene con <strong>6 hebras</strong> unidas. En el bordado chino casi siempre trabajamos con <strong>1 hebra</strong> (detalles y degradados muy suaves) o <strong>2 hebras</strong> (rellenos más rápidos).</p>
<ol>
<li>Corta un largo de hilo de unos 40 cm (más largo se enreda y se desgasta).</li>
<li>Sujeta la punta y separa <strong>una sola hebra</strong>, tirando de ella hacia arriba despacio. El resto del hilo se va a fruncir: es normal.</li>
<li>Repite con cada hebra que necesites y luego júntalas otra vez si vas a bordar con dos.</li>
</ol>
<div class="tip">💡 Separar las hebras y volver a juntarlas hace que queden planas y brillantes. Por eso los bordados profesionales se ven tan lisos.</div>`,
        practice: 'Separa 3 tramos de 1 hebra y 3 de 2 hebras de cada tono que vayas a usar en tu peonía.',
      },
      {
        id: 'm1-5', title: 'Empezar y terminar sin nudos', min: 7,
        videos: [{ id: '-TSAl-aZYrI', t: 'Bordar sin nudos', c: 'Bordando Arte' }],
        body: `
<p>Los nudos dejan bultos que se notan cuando el bordado se enmarca o se plancha. Por eso en el bordado fino se trabaja <strong>sin nudos</strong>:</p>
<ul>
<li><strong>Para empezar:</strong> deja una colita de hilo por detrás y sujétala con tus primeras puntadas. También puedes hacer 2 o 3 puntaditas muy pequeñas dentro del área que vas a cubrir (quedan escondidas debajo del relleno).</li>
<li><strong>Para terminar:</strong> pasa la aguja por debajo de las puntadas del revés, ida y vuelta, y corta el sobrante.</li>
</ul>
<div class="tip">💡 Un revés ordenado también es parte de un trabajo profesional. Tus clientas lo van a notar.</div>`,
        practice: 'Haz una línea de 10 puntadas empezando y terminando sin nudo. Revisa el revés.',
      },
    ],
  },
  {
    id: 'm2', icon: '🪡', title: 'Puntadas esenciales', subtitle: 'La base que vas a usar en todas tus piezas',
    lessons: [
      {
        id: 'm2-1', title: 'Las 10 puntadas básicas', min: 15,
        videos: [{ id: 'PLssCCFD-SI', t: 'Tutorial de bordado para principiantes: Top 10 puntadas básicas', c: 'Amalia Ricalde' }],
        body: `
<p>Antes de pintar con hilo necesitas dominar algunas puntadas simples. Las que más vas a usar en este curso son:</p>
<ul>
<li><strong>Punto atrás:</strong> para contornos finos y tallos.</li>
<li><strong>Punto tallo:</strong> tallos y ramas con aspecto de cordón.</li>
<li><strong>Punto partido (split stitch):</strong> se usa para marcar el borde de pétalos y hojas antes de rellenar. Da un borde limpio y levemente elevado.</li>
<li><strong>Punto satín:</strong> relleno liso para formas pequeñas.</li>
<li><strong>Punto largo y corto:</strong> el corazón del bordado chino (lo vemos a fondo en el Módulo 3).</li>
<li><strong>Nudo francés:</strong> centros de flores y ojos de animales.</li>
</ul>
<p>Mira el video completo y practica cada puntada en una tela de prueba.</p>`,
        practice: 'Haz un muestrario: una línea de cada puntada en un retazo de tela. Guárdalo, te va a servir como referencia.',
      },
      {
        id: 'm2-2', title: 'Punto satín perfecto', min: 8,
        videos: [{ id: 'tlkZ35ZST0o', t: 'Punto satín, cómo hacer punto satín', c: 'Daisy Marroquin Embroidery en español' }],
        body: `
<p>El punto satín son puntadas paralelas, una pegada a la otra, que cubren una forma sin dejar ver la tela.</p>
<ol>
<li>Primero bordea la forma con <strong>punto partido</strong>.</li>
<li>Empieza por el <strong>centro</strong> de la forma, con una puntada en la dirección correcta (por ejemplo, de la vena de la hoja hacia el borde).</li>
<li>Rellena una mitad y luego la otra, siempre pasando la aguja <strong>por fuera</strong> del contorno partido.</li>
</ol>
<div class="tip">⚠️ El satín es solo para formas pequeñas (hasta 1 cm). En formas más grandes las puntadas quedan flojas y se enganchan: ahí usamos largo y corto.</div>`,
        practice: 'Rellena 3 hojitas pequeñas con punto satín: una con la puntada recta, otra inclinada y otra en "V" desde la vena.',
      },
      {
        id: 'm2-3', title: 'Punto largo y corto: introducción', min: 6,
        videos: [{ id: 'pyT_2TmQOQk', t: 'Cómo bordar punto largo y punto corto matizado', c: 'Bordando Arte' }],
        body: `
<p>Esta es <strong>la puntada más importante del curso</strong>. Con ella se hacen los pétalos, las hojas, las plumas y los degradados.</p>
<ol>
<li><strong>Primera fila:</strong> alterna una puntada larga y una corta, saliendo siempre desde el borde de la forma.</li>
<li><strong>Siguientes filas:</strong> todas las puntadas son del mismo largo. Sales <strong>atravesando</strong> la puntada de la fila anterior (dividiéndola) y así las filas se mezclan sin líneas marcadas.</li>
<li>Cambia de tono en cada fila para crear el degradado.</li>
</ol>
<p>En el Módulo 3 lo vamos a practicar paso a paso, con la plantilla de dirección del hilo.</p>`,
        practice: 'En un círculo de 3 cm, haz 3 filas de largo y corto con 3 tonos del mismo color.',
      },
      {
        id: 'm2-4', title: 'Nudo francés que no se deshace', min: 7,
        videos: [{ id: 'tdLqalcjpQU', t: 'Cómo hacer nudo francés: 5 maneras', c: "Artesd'Olga" }],
        body: `
<p>El nudo francés da textura a los <strong>centros de las flores</strong> y sirve para los ojos de pájaros y animales.</p>
<ul>
<li>Enrolla el hilo 1 o 2 veces alrededor de la aguja (más vueltas = nudo más grande pero menos firme).</li>
<li>Vuelve a entrar <strong>muy cerca</strong> del punto de salida, pero nunca en el mismo agujero.</li>
<li>Mantén el hilo tenso con la otra mano mientras empujas la aguja hacia abajo.</li>
</ul>`,
        practice: 'Haz 20 nudos franceses en un círculo, como si fuera el centro de una flor.',
      },
    ],
  },
  {
    id: 'm3', icon: '🎨', title: 'Pintura con hilo', subtitle: 'El corazón del bordado chino realista',
    lessons: [
      {
        id: 'm3-1', title: 'Dirección del hilo: el secreto del realismo', min: 12,
        videos: [{ id: 'eyMfKsWdui0', t: 'Needle painting desde cero: ejercicios para triunfar', c: 'Mariquita María Dos' }],
        body: `
<p>Lo que hace que un pétalo bordado parezca real no es solo el color, es la <strong>dirección de las puntadas</strong>. La luz rebota distinto según el ángulo del hilo, y eso crea volumen.</p>
<h3>Reglas de oro</h3>
<ul>
<li>En los <strong>pétalos</strong>, las puntadas van del borde exterior hacia el centro de la flor, como rayos.</li>
<li>En las <strong>hojas</strong>, van en diagonal desde el borde hacia la vena central, como una espiga.</li>
<li>En las <strong>plumas</strong>, siguen la dirección en la que crece la pluma, de la cabeza hacia la cola.</li>
<li>Las puntadas <strong>nunca se cruzan</strong>. Si la forma se curva, ve abriendo el ángulo de a poco.</li>
</ul>
<div class="tip">💡 Antes de bordar, dibuja con lápiz unas líneas guía dentro de la forma. Nuestra plantilla <em>"Ejercicio: dirección del hilo"</em> ya las trae marcadas.</div>`,
        practice: 'Usa la plantilla "Ejercicio: dirección del hilo". Borda los 3 pétalos de arriba en un solo color, siguiendo las líneas punteadas.',
      },
      {
        id: 'm3-2', title: 'Largo y corto por capas', min: 18,
        videos: [{ id: '8qDf4skaYsA', t: 'Needle painting desde cero', c: 'Mariquita María Dos' }],
        body: `
<p>Ahora sí: vamos a pintar con hilo. Trabaja siempre <strong>de afuera hacia adentro</strong> y <strong>de atrás hacia adelante</strong> (primero lo que está más lejos en el dibujo).</p>
<ol>
<li><strong>Contorno:</strong> borde del pétalo en punto partido, con 1 hebra.</li>
<li><strong>Fila 1 (tono más claro, en el borde):</strong> puntadas largas y cortas alternadas que salen desde el centro de la forma y entran <strong>por fuera</strong> del contorno partido. Así el borde queda limpio.</li>
<li><strong>Fila 2 (tono siguiente):</strong> sales atravesando las puntadas de la fila 1, a distintas alturas. Nunca hagas una línea recta: las alturas irregulares son las que mezclan los colores.</li>
<li><strong>Filas 3, 4…:</strong> repite, cada una con un tono más oscuro, hasta llegar al centro.</li>
<li>Al final, si algún paso entre tonos se ve brusco, agrega puntadas sueltas del tono intermedio encima. A esto se le llama <strong>"suavizar"</strong>.</li>
</ol>
<div class="tip">💡 Usa 1 hebra para pétalos pequeños y degradados finos. Usa 2 hebras para rellenar más rápido en piezas grandes.</div>`,
        practice: 'Borda los 3 pétalos de la plantilla de dirección con 3 tonos: claro en el borde, medio y oscuro en la base.',
      },
      {
        id: 'm3-3', title: 'Corregir los errores más comunes', min: 10, videos: [],
        body: `
<table class="plan">
<tr><th>Se ven "rayas" entre colores</th><td>Las alturas de la fila anterior quedaron parejas. Atraviesa más arriba y más abajo, de forma irregular.</td></tr>
<tr><th>Se ve la tela entre puntadas</th><td>Las puntadas quedaron muy separadas. Agrega puntadas de relleno en el mismo tono, o usa 2 hebras.</td></tr>
<tr><th>La forma quedó "abombada"</th><td>Tiraste demasiado del hilo o la tela estaba floja. Tensa bien el bastidor y deja que el hilo apoye sin apretar.</td></tr>
<tr><th>El borde quedó irregular</th><td>Te faltó el contorno en punto partido, o saliste por dentro de él. Siempre entra por fuera del contorno.</td></tr>
<tr><th>Las puntadas se cruzan</th><td>Cambiaste la dirección de golpe. Abre el ángulo poco a poco, como un abanico.</td></tr>
<tr><th>El hilo se ve opaco y peludo</th><td>El tramo era demasiado largo. Usa tramos de 40 cm y cámbialos seguido.</td></tr>
</table>
<div class="tip">💡 Si una zona no te gusta, puedes deshacerla con cuidado usando la punta de la aguja. No tengas miedo de repetir: así se aprende.</div>`,
        practice: 'Mira tus pétalos del ejercicio anterior. Busca uno de estos errores y corrígelo.',
      },
    ],
  },
  {
    id: 'm4', icon: '🌺', title: 'Flores y peonías', subtitle: 'Las piezas más buscadas',
    lessons: [
      {
        id: 'm4-1', title: 'Hojas: 6 formas de bordarlas', min: 13,
        videos: [{ id: 'gWuDzQbtAiY', t: '6 puntadas básicas para bordar hojas, paso a paso', c: "Artesd'Olga" }],
        body: `
<p>Las hojas le dan marco a tus flores. Para piezas realistas, las dos técnicas más usadas son:</p>
<ul>
<li><strong>Satín en V (espiga):</strong> para hojas pequeñas. Puntadas en diagonal que se encuentran en la vena central.</li>
<li><strong>Largo y corto en dos mitades:</strong> para hojas grandes. Una mitad más clara (la que recibe la luz) y la otra más oscura. Este contraste hace que la hoja se vea "doblada" y con volumen.</li>
</ul>
<p>La vena central se borda al final, en punto tallo o punto atrás, con un verde más claro.</p>`,
        practice: 'Borda las 3 hojas de la plantilla de dirección del hilo: una en satín en V y dos en largo y corto con dos tonos de verde.',
      },
      {
        id: 'm4-2', title: 'Flores matizadas paso a paso', min: 23,
        videos: [
          { id: 'QBMGvZadVU8', t: 'Bordado matizado para rosas y flores', c: 'Entre Hilos Agujas y Más' },
          { id: '30s7hq6IdSw', t: 'Cómo bordar flores matizadas, muy fácil y rápido', c: 'Bordando Sueños' },
        ],
        body: `
<p>Antes de la peonía, practica con una flor más simple usando la plantilla <strong>"Rosa y capullos"</strong>.</p>
<ol>
<li>Borda primero los pétalos <strong>de atrás</strong> (los que quedan tapados por otros).</li>
<li>Cada pétalo: tono claro en el borde, oscuro hacia la base.</li>
<li>Los pétalos <strong>de adelante</strong> van al final, y su borde superior se hace un tono más claro para que "se separen" de los de atrás.</li>
<li>El centro de la rosa (la espiral) va en el tono más oscuro, con puntadas cortas.</li>
<li>Los capullos: dos tonos, el claro arriba.</li>
</ol>
<div class="tip">💡 Entre un pétalo y el de adelante deja un tono de diferencia. Si los dos tienen el mismo color en el borde, se mezclan y la flor pierde forma.</div>`,
        practice: 'Borda la plantilla "Rosa y capullos" completa.',
      },
      {
        id: 'm4-3', title: 'Proyecto: tu primera peonía', min: 40,
        videos: [{ id: '30s7hq6IdSw', t: 'Cómo bordar flores matizadas', c: 'Bordando Sueños' }],
        body: `
<p>La peonía es <strong>la flor símbolo del bordado chino</strong>: representa prosperidad y amor. También es la pieza que más se vende. Usa la plantilla <strong>"Peonía"</strong>.</p>
<h3>Colores sugeridos</h3>
<p>5 tonos de rosa (del casi blanco al fucsia oscuro), 3 verdes, 1 amarillo para el centro.</p>
<h3>Orden de trabajo</h3>
<ol>
<li><strong>Hojas y tallo</strong> (quedan detrás de la flor).</li>
<li><strong>Corona exterior</strong> (los 9 pétalos grandes): tono 1 (claro) en el borde ondulado, tonos 2 y 3 hacia adentro. Dirección: del borde hacia el centro de la flor.</li>
<li><strong>Corona media</strong> (6 pétalos): empieza con el tono 2 en el borde y baja hasta el 4. El borde de cada pétalo debe quedar más claro que lo que tiene detrás.</li>
<li><strong>Corona interior</strong> (4 pétalos): del tono 3 al 5. Es la zona más oscura y le da profundidad a la flor.</li>
<li><strong>Centro:</strong> nudos franceses amarillos, con algunos en un tono más oscuro.</li>
<li><strong>Toques de luz:</strong> unas pocas puntadas largas de 1 hebra blanca o del tono 1 sobre los bordes ondulados.</li>
</ol>
<div class="tip">⏱️ Una peonía de 15 cm lleva entre 8 y 15 horas. Divídela en sesiones cortas: una corona por día.</div>`,
        practice: '¡Borda tu peonía! Tómale una foto con luz natural cuando la termines. Es tu primera pieza para mostrar.',
      },
    ],
  },
  {
    id: 'm5', icon: '🐦', title: 'Aves y mariposas', subtitle: 'Plumas, alas y vida en tus bordados',
    lessons: [
      {
        id: 'm5-1', title: 'Pájaro realista: pintar con hilos', min: 18,
        videos: [
          { id: 'P1CrsYIGr8w', t: 'Bordado a mano: pintar con hilos, ave', c: 'Bordando Arte' },
          { id: 'PrlfSoAIPnY', t: 'Pájaro bordado a mano paso a paso: bordado realista', c: 'Carli Lo' },
        ],
        body: `
<p>Usa la plantilla <strong>"Pájaro en rama"</strong>. Las aves se bordan con la misma técnica de largo y corto, pero las puntadas son <strong>más cortas</strong> y siguen el crecimiento de las plumas.</p>
<ol>
<li><strong>Rama y flores primero</strong>: punto tallo marrón en dos tonos para la rama.</li>
<li><strong>Cola</strong>: puntadas largas, de la punta hacia el cuerpo.</li>
<li><strong>Pecho y vientre</strong>: tonos claros, puntadas cortas que salen del pico hacia la cola, en curva.</li>
<li><strong>Ala</strong>: puntadas largas encima del cuerpo, en el tono más oscuro en las puntas de las plumas.</li>
<li><strong>Cabeza</strong>: puntadas muy cortas, siguiendo la curva del cráneo.</li>
<li><strong>Ojo</strong>: un nudo francés negro con una puntadita blanca de brillo. Este detalle da vida al pájaro.</li>
<li><strong>Pico y patas</strong>: punto satín pequeño y punto atrás.</li>
</ol>`,
        practice: 'Borda la plantilla "Pájaro en rama". Elige los colores de un ave real de tu país mirando una foto.',
      },
      {
        id: 'm5-2', title: 'Mariposa paso a paso', min: 11,
        videos: [{ id: 'IsQMk1q5n-0', t: 'Cómo bordar una mariposa: tutorial paso a paso', c: 'Amalia Ricalde' }],
        body: `
<p>Usa la plantilla <strong>"Mariposa"</strong>. Las mariposas son ideales para practicar degradados intensos y venden muy bien en recuerdos y piezas pequeñas.</p>
<ul>
<li>Borda primero las <strong>alas de abajo</strong> y luego las de arriba.</li>
<li>Las puntadas van del cuerpo hacia el borde del ala.</li>
<li>Haz el borde del ala en un color oscuro y las manchas redondas al final, en satín.</li>
<li>El cuerpo va en satín o en nudos franceses pequeños, y las antenas en punto atrás con 1 hebra.</li>
</ul>`,
        practice: 'Borda la mariposa usando un degradado de 3 tonos en cada ala.',
      },
    ],
  },
  {
    id: 'm6', icon: '🌈', title: 'Color en la práctica', subtitle: 'Luz, sombra y degradado en el bordado',
    lessons: [
      {
        id: 'm6-1', title: 'Cómo combinar los colores del hilo', min: 7,
        videos: [{ id: 'cg_r2sXknvk', t: 'Te enseño a combinar los colores de hilo', c: 'La Puntadita Mexicana' }],
        body: `
<p>Para el bordado realista no piensas en "un color", piensas en <strong>una familia de tonos</strong>.</p>
<ul>
<li><strong>Familia de 3 tonos:</strong> claro, medio y oscuro. Lo mínimo para dar volumen.</li>
<li><strong>Familia de 5 tonos:</strong> para flores grandes como la peonía.</li>
<li>Agrega siempre un <strong>tono de luz</strong> (casi blanco) y un <strong>tono de sombra</strong> (un paso más oscuro que el más oscuro de la familia, o un toque de color complementario).</li>
</ul>
<div class="tip">💡 Pon las madejas una al lado de la otra y entrecierra los ojos. Si dos tonos parecen iguales, sobra uno. Si hay un "salto" muy grande, te falta un tono intermedio.</div>`,
        practice: 'Arma 3 familias de color: una de rosas (5 tonos), una de verdes (3 tonos) y una para un pájaro (3 a 4 tonos).',
      },
      {
        id: 'm6-2', title: 'Luz y sombra: aprende a ver', min: 11,
        videos: [{ id: 'yfmjMxOPbHI', t: 'Aprende a ver para bordar: cómo identificar luces y sombras', c: 'Daisy Marroquin Embroidery en español' }],
        body: `
<p>Antes de bordar, decide <strong>de dónde viene la luz</strong> (por ejemplo, de arriba a la izquierda). Después:</p>
<ul>
<li>Los bordes de pétalos y hojas que miran hacia la luz van <strong>más claros</strong>.</li>
<li>Las partes que quedan debajo de otro pétalo, o del lado contrario a la luz, van <strong>más oscuras</strong>.</li>
<li>El centro de la flor siempre es más oscuro: ahí llega menos luz.</li>
</ul>
<div class="tip">💡 Saca una foto en blanco y negro de la flor o del pájaro que quieres bordar. Sin color, ves la luz y la sombra mucho más claro.</div>`,
        practice: 'En la plantilla de la peonía, marca con lápiz una flecha de luz y pinta suavemente las zonas oscuras.',
      },
      {
        id: 'm6-3', title: 'Degradado perfecto en 5 tonos', min: 8,
        videos: [{ id: '0V6teDK_C5A', t: 'Cómo hacer degradado de color en el bordado', c: 'Mar Pendás' }],
        body: `
<p>Usa la plantilla <strong>"Ejercicio: degradado en 5 tonos"</strong>. Las líneas punteadas marcan dónde cambia cada tono.</p>
<ol>
<li>Zona 5 (borde): el tono más claro, puntadas largas y cortas.</li>
<li>Zona 4: el siguiente tono, atravesando las puntadas de la zona 5 a distintas alturas.</li>
<li>Sigue igual hasta la zona 1, el tono más oscuro, en la base.</li>
<li>Al final, "cose" las transiciones con puntadas sueltas del tono intermedio.</li>
</ol>
<p>Si terminas y el degradado se ve suave desde 1 metro de distancia, <strong>dominaste la técnica</strong>.</p>`,
        practice: 'Borda el ejercicio de degradado. Repítelo en verde para ganar soltura.',
      },
    ],
  },
  {
    id: 'm7', icon: '✨', title: 'Bordado en relieve', subtitle: 'Texturas que cobran vida',
    lessons: [
      {
        id: 'm7-1', title: '5 puntadas con relieve', min: 12,
        videos: [{ id: '-pQxckzOWQs', t: 'Bordado a mano: 5 puntadas con relieve', c: 'Hilos de Papel' }],
        body: `
<p>El relieve hace que una parte del bordado "salga" de la tela. En piezas realistas se usa con moderación, solo donde quieres llamar la atención:</p>
<ul>
<li><strong>Satín acolchado:</strong> primero bordas una capa de relleno (puntadas en una dirección) y encima el satín en dirección contraria. Ideal para pétalos de adelante y cuerpos de mariposa.</li>
<li><strong>Punto partido en capas:</strong> dos o tres contornos superpuestos debajo del relleno levantan el borde de un pétalo.</li>
<li><strong>Nudos y rococó:</strong> centros de flores con mucha textura.</li>
</ul>`,
        practice: 'Rehaz uno de los pétalos de adelante de tu rosa con satín acolchado y compara.',
      },
      {
        id: 'm7-2', title: 'Nudo francés y punto rococó', min: 6,
        videos: [{ id: 'mFCitvEatEs', t: 'Muestrario: nudo francés y punto rococó', c: 'Bordando Arte' }],
        body: `
<p>El <strong>punto rococó</strong> es como un nudo francés alargado: enrollas el hilo muchas veces (8 a 15 vueltas) y lo fijas en forma de "gusanito". Juntando varios se hacen centros de flores, lavandas y rosas en relieve.</p>
<div class="tip">💡 Para que el rococó no se deshaga, sujeta las vueltas con el pulgar mientras pasas la aguja, y usa una aguja de ojo pequeño (las vueltas pasan más fácil).</div>`,
        practice: 'Rellena el centro de una flor del "Ramito pequeño" con nudos franceses de dos tonos.',
      },
    ],
  },
  {
    id: 'm8', icon: '🪵', title: 'Bastidor bien cuidado', subtitle: 'Acabado profesional y conservación',
    lessons: [
      {
        id: 'm8-1', title: 'Lavar tu bordado sin arruinarlo', min: 9,
        videos: [{ id: 'TWHY7mH_wVk', t: 'La mejor forma de lavar tus bordados', c: 'Carli Lo' }],
        body: `
<p>Siempre que uses marcador que se borra con agua, o que la pieza se haya ensuciado, lávala <strong>antes</strong> del acabado:</p>
<ol>
<li>Agua <strong>fría</strong> con un poco de jabón neutro.</li>
<li>Sumerge y mueve suavemente. <strong>Nunca frotes</strong> sobre el bordado.</li>
<li>Enjuaga bien y no la retuerzas: apriétala entre dos toallas.</li>
<li>Deja secar en plano, a la sombra.</li>
</ol>
<div class="tip">⚠️ Antes del primer lavado, prueba si los hilos rojos u oscuros destiñen, mojando una puntada de prueba.</div>`,
        practice: 'Lava tu muestrario del Módulo 2 siguiendo estos pasos.',
      },
      {
        id: 'm8-2', title: 'Planchar sin aplastar las puntadas', min: 14,
        videos: [{ id: 'F7mheF5hFYk', t: 'Cómo planchar los bordados', c: 'Profe Sonia' }],
        body: `
<ul>
<li>Pon una toalla gruesa sobre la tabla y apoya el bordado <strong>boca abajo</strong>.</li>
<li>Cubre con un paño fino de algodón.</li>
<li>Plancha a temperatura media, sin arrastrar: <strong>presiona y levanta</strong>.</li>
<li>La toalla deja que las puntadas se hundan en ella, así no se aplastan y conservan el relieve.</li>
</ul>`,
        practice: 'Plancha tu peonía antes de montarla en el bastidor final.',
      },
      {
        id: 'm8-3', title: 'Cerrar el bastidor por detrás', min: 5,
        videos: [
          { id: 'NS50J6Y0Iss', t: 'Cómo cerrar el bastidor y tapar las puntadas', c: 'Broderie Colors' },
          { id: 'bCKAiDmK3Xs', t: 'Remate del bastidor: fácil, rápido y bonito', c: 'Cazadora de inspiración' },
        ],
        body: `
<p>Un buen acabado por detrás es lo que separa una pieza "casera" de una pieza que se puede vender a buen precio.</p>
<ol>
<li>Centra el bordado y tensa la tela en el bastidor final.</li>
<li>Recorta la tela sobrante dejando unos 3 cm alrededor.</li>
<li>Haz un hilván (puntada corrida) alrededor del borde y tira para fruncir la tela hacia adentro.</li>
<li>Pega un círculo de fieltro o cartón forrado en la parte trasera para tapar todo.</li>
<li>Opcional: agrega tu etiqueta o tarjeta con tu marca (ver Bono 3).</li>
</ol>`,
        practice: 'Cierra tu peonía en el bastidor y pega tu círculo de fieltro.',
      },
      {
        id: 'm8-4', title: 'Enmarcar y conservar', min: 3,
        videos: [{ id: '4MEv8Gpek-I', t: '¿Cómo enmarcar un bordado? Paso a paso', c: 'Chio Blanche Mx' }],
        body: `
<p>Para cuadros decorativos, enmarcar protege la pieza del polvo y sube su valor.</p>
<ul>
<li>Monta la tela tensa sobre un cartón rígido (con alfileres por el canto o con cinta de doble faz).</li>
<li>Si usas vidrio, deja un pequeño espacio entre el vidrio y el bordado (un passe-partout) para no aplastar las puntadas.</li>
</ul>
<h3>Conservación</h3>
<ul>
<li>Lejos del sol directo: decolora la seda y el algodón.</li>
<li>Lejos de la humedad: guarda las piezas en bolsas de tela, no de plástico.</li>
<li>Para limpiar el polvo usa un secador en frío o un cepillo suave.</li>
</ul>
<p>Comparte estas recomendaciones con tus clientas en una tarjetita: transmite cuidado y profesionalismo.</p>`,
        practice: 'Escribe tu propia tarjetita de "cuidados de tu bordado" para entregar con cada pieza.',
      },
    ],
  },
  {
    id: 'm9', icon: '🛍️', title: 'Proyectos para vender', subtitle: 'Cuadros, cojines, toallas y recuerdos',
    lessons: [
      {
        id: 'm9-1', title: 'Cojín bordado', min: 18,
        videos: [{ id: '1p6SwbzUMPQ', t: 'Cojín con diseño bordado para principiantes', c: 'Viviana Fdez' }],
        body: `
<p>Los cojines son una de las piezas más vendidas: se ven en todo el living y son un regalo muy pedido.</p>
<ul>
<li>Usa lino o algodón grueso. Borda el frente <strong>antes</strong> de coser la funda.</li>
<li>Una peonía o un ramo en una esquina queda elegante y lleva menos tiempo que un diseño completo.</li>
<li>Haz la funda con cierre, así la clienta puede lavarla. Incluye las instrucciones de lavado.</li>
</ul>`,
        practice: 'Borda el "Ramito pequeño" en la esquina de una funda de cojín.',
      },
      {
        id: 'm9-2', title: 'Toallas, servilletas y blancos', min: 8,
        videos: [{ id: 'F14d-DRmN0o', t: 'Cómo bordar letras en toallas', c: 'Carli Lo' }],
        body: `
<p>Las toallas y servilletas personalizadas son ideales para <strong>bodas, nacimientos y regalos</strong>. Combina un ramito pequeño con una inicial o un nombre.</p>
<ul>
<li>En toallas de rizo, coloca una <strong>entretela soluble encima</strong> para que las puntadas no se hundan en el rizo.</li>
<li>Usa 2 o 3 hebras: las piezas de uso diario necesitan puntadas más firmes.</li>
<li>Ofrece juegos (2 toallas, 4 servilletas). Un juego se vende mejor que una pieza suelta.</li>
</ul>`,
        practice: 'Borda una inicial con un ramito en una toalla de mano.',
      },
      {
        id: 'm9-3', title: 'Ideas e inspiración para tus próximas piezas', min: 5, videos: [],
        body: `
<p>Una vez que dominas flores y aves, puedes crear decenas de productos con las mismas técnicas:</p>
<div class="ideas">
<div>🖼️ <strong>Cuadros decorativos</strong><br/>Peonías, ramos, pájaros en rama.</div>
<div>🐶 <strong>Retratos de mascotas</strong><br/>Muy pedidos y se cobran bien.</div>
<div>👘 <strong>Abanicos</strong><br/>Una flor o una mariposa en tela de seda.</div>
<div>🎁 <strong>Recuerdos</strong><br/>Mini bastidores de 8 a 10 cm para bodas, bautizos y quinceañeras.</div>
<div>🔑 <strong>Llaveros y broches</strong><br/>Con tus sobrantes de tela e hilo.</div>
<div>👜 <strong>Bolsos de tela</strong><br/>Un ramo bordado en una tote bag.</div>
<div>📔 <strong>Tapas de cuaderno</strong><br/>Regalo de cumpleaños o de fin de curso.</div>
<div>💍 <strong>Aros de anillos de boda</strong><br/>Con iniciales y fecha.</div>
</div>
<div class="gallery">
<img src="img/bird-flower-embroidery-800.webp" alt="Pájaro bordado entre flores" loading="lazy"/>
<img src="img/butterfly-embroidery-800.webp" alt="Mariposas bordadas" loading="lazy"/>
<img src="img/toucan-embroidery-800.webp" alt="Tucán bordado" loading="lazy"/>
<img src="img/dog-embroidery-800.webp" alt="Retrato de perrito bordado" loading="lazy"/>
<img src="img/simone-embroidery-800.webp" alt="Cojín bordado con flores" loading="lazy"/>
<img src="img/larissa-embroidery-800.webp" alt="Pájaro y flores bordados" loading="lazy"/>
</div>`,
        practice: 'Elige 3 productos de esta lista para tu primer catálogo.',
      },
    ],
  },
];

const BONUSES = [
  {
    id: 'b1', icon: '📍', title: 'Clientes Más Allá de Instagram', subtitle: 'Dónde están tus próximos clientes',
    lessons: [
      {
        id: 'b1-1', title: 'Vender en Facebook Marketplace', min: 9,
        videos: [{ id: 'Izk6MOmAGy0', t: 'Cómo vender en Facebook Marketplace: guía paso a paso', c: 'HubSpot Español' }],
        body: `
<p>Marketplace es gratis y muestra tus piezas a personas <strong>de tu ciudad</strong> que ya están buscando decoración y regalos.</p>
<ul>
<li><strong>Título claro:</strong> "Cuadro bordado a mano – Peonía rosa 15 cm" (qué es + tema + tamaño).</li>
<li><strong>Primera foto:</strong> la pieza completa, con luz natural y fondo limpio. Segunda: un detalle de cerca. Tercera: la pieza en un ambiente (en la pared, sobre un sillón).</li>
<li><strong>Descripción:</strong> materiales, tamaño, tiempo de trabajo ("12 horas bordadas a mano") y que haces piezas por encargo.</li>
<li>Publica de nuevo cada semana: las publicaciones nuevas aparecen más.</li>
</ul>`,
        practice: 'Publica tu peonía en Marketplace siguiendo esta guía.',
      },
      {
        id: 'b1-2', title: 'WhatsApp como tu tienda', min: 4,
        videos: [{ id: 'vYm9wmXyXgM', t: 'Cómo agregar WhatsApp a Marketplace de Facebook', c: 'Aprende Marketing con Cristina' }],
        body: `
<ul>
<li>Usa <strong>WhatsApp Business</strong> (gratis): tiene catálogo, respuestas rápidas y horario de atención.</li>
<li>Arma tu <strong>catálogo</strong> con foto, precio y descripción de cada pieza.</li>
<li>Publica en tus <strong>estados</strong> el proceso: una foto del bordado a medio camino genera curiosidad y pedidos.</li>
<li>Crea una <strong>lista de difusión</strong> con tus clientas para avisar de piezas nuevas y fechas especiales.</li>
</ul>
<h3>Otros lugares para vender</h3>
<ul>
<li><strong>Ferias y bazares</strong> de artesanía de tu ciudad.</li>
<li><strong>Tiendas de regalos y decoración</strong>: ofrece piezas a consignación.</li>
<li><strong>Organizadoras de bodas y eventos</strong>: recuerdos bordados por encargo.</li>
<li><strong>Floristerías y cafeterías</strong>: muchas exhiben arte local.</li>
</ul>`,
        practice: 'Instala WhatsApp Business y carga 3 productos en tu catálogo.',
      },
    ],
  },
  {
    id: 'b2', icon: '📅', title: 'Bordados para Fechas Especiales', subtitle: 'Vende todo el año',
    lessons: [
      {
        id: 'b2-1', title: 'Tu calendario de ventas', min: 6, videos: [],
        body: `
<p>Planifica tus piezas <strong>4 a 6 semanas antes</strong> de cada fecha. Las fechas cambian según el país: ajusta este calendario al tuyo.</p>
<table class="plan">
<tr><th>Febrero</th><td>San Valentín / Día del Amor y la Amistad: corazones con flores, iniciales de pareja.</td></tr>
<tr><th>Mayo</th><td>Día de la Madre (en muchos países de Latinoamérica es en mayo): peonías, rosas, nombres. <strong>La fecha más fuerte del año.</strong></td></tr>
<tr><th>Junio</th><td>Día del Padre: retratos de mascotas, llaveros.</td></tr>
<tr><th>Todo el año</th><td>Bodas, bautizos, nacimientos, quinceañeras, cumpleaños: recuerdos y aros de anillos.</td></tr>
<tr><th>Fin de año</th><td>Navidad y Año Nuevo: adornos para el árbol, mini bastidores para regalar, regalos corporativos.</td></tr>
</table>
<h3>Ideas que se venden solas</h3>
<ul>
<li><strong>Bastidor con el nombre de la mamá</strong> y su flor favorita.</li>
<li><strong>Recuerdos de 8 cm</strong> para invitados (precio por docena).</li>
<li><strong>Bastidor de nacimiento</strong> con nombre, fecha, peso y talla del bebé.</li>
<li><strong>Kit de regalo:</strong> bastidor + tarjeta + caja.</li>
</ul>`,
        practice: 'Elige la próxima fecha especial de tu país y diseña 2 productos para ella.',
      },
    ],
  },
  {
    id: 'b3', icon: '🏷️', title: 'Una Marca con Tu Firma', subtitle: 'Que te recuerden por lo que solo tú creas',
    lessons: [
      {
        id: 'b3-1', title: 'Elige el nombre de tu marca', min: 12,
        videos: [{ id: 'G_H2cwORD5g', t: 'Cómo elegir el nombre ideal para tu marca', c: 'Ana de Agencia Rosa' }],
        body: `
<ul>
<li>Corto, fácil de decir y de escribir.</li>
<li>Que se pueda usar en Instagram y WhatsApp (revisa que esté libre).</li>
<li>Puede incluir tu nombre: "Bordados Ana", "Hilos de Lucía", "Atelier Flor de Seda".</li>
</ul>`,
        practice: 'Escribe 10 opciones de nombre, elige 3 y pregúntale a 5 amigas cuál recuerdan al día siguiente.',
      },
      {
        id: 'b3-2', title: 'Identidad artesanal que vende', min: 7,
        videos: [{ id: 'peVxpITqnC0', t: 'Crea una marca artesanal exitosa', c: 'Ximena Pérez' }],
        body: `
<ul>
<li><strong>Colores:</strong> elige 2 o 3 y úsalos siempre (etiquetas, fotos, empaques).</li>
<li><strong>Etiqueta:</strong> una tarjetita con tu logo, el nombre de la pieza, "hecho a mano" y los cuidados.</li>
<li><strong>Firma:</strong> borda tus iniciales pequeñas en una esquina de cada pieza.</li>
<li><strong>Empaque:</strong> papel de seda, una cinta y una nota escrita a mano. Cuesta poco y se recuerda mucho.</li>
<li><strong>Tu historia:</strong> cuenta por qué bordas. La gente compra a personas, no solo productos.</li>
</ul>`,
        practice: 'Diseña tu etiqueta (puedes usar Canva gratis) e imprime 20.',
      },
    ],
  },
  {
    id: 'b4', icon: '🪟', title: 'Tu Bordado en la Vitrina Correcta', subtitle: 'Fotos, precio y presentación',
    lessons: [
      {
        id: 'b4-1', title: 'Fotos de producto con tu celular', min: 7,
        videos: [{ id: 'dJfroXxjSBw', t: 'Cómo tomar fotos de producto con celular y luz natural desde casa', c: 'Luis Cano Foto' }],
        body: `
<ul>
<li>Fotografía <strong>cerca de una ventana</strong>, con luz natural indirecta (no sol directo).</li>
<li>Fondo liso: una tela de lino, una mesa de madera o una cartulina blanca.</li>
<li>Limpia la lente del celular antes de cada foto.</li>
<li>Haz siempre 3 fotos: la pieza entera, un detalle de cerca (se ven las puntadas) y la pieza en un ambiente.</li>
<li>Toma la foto <strong>desde arriba y de frente</strong>, sin inclinar, para que el bastidor no se deforme.</li>
</ul>`,
        practice: 'Saca las 3 fotos de tu peonía y elige la mejor para tu perfil.',
      },
      {
        id: 'b4-2', title: 'Cuánto cobrar por tus bordados', min: 26,
        videos: [{ id: '4T02IMZQdY8', t: '¿No sabes cuánto cobrar por tus artesanías? Guía paso a paso', c: 'tinagus' }],
        body: `
<p>La fórmula básica:</p>
<p class="formula">Precio = (materiales + horas × valor de tu hora) × 1,3</p>
<p>El 30% extra cubre el empaque, el transporte, las comisiones y lo que inviertes en aprender. Usa la calculadora de abajo con los valores en la moneda de tu país.</p>
<div id="price-calc"></div>
<div class="tip">💡 No compitas por precio con productos industriales. Tu pieza es única y bordada a mano: cuenta cuántas horas lleva y muéstralo.</div>`,
        practice: 'Calcula el precio de tu peonía con la calculadora.',
      },
    ],
  },
  {
    id: 'b5', icon: '💝', title: 'De la Primera Compra al Próximo Regalo', subtitle: 'Clientas que vuelven y te recomiendan',
    lessons: [
      {
        id: 'b5-1', title: 'Cómo fidelizar a tus clientas', min: 9,
        videos: [{ id: 'PSwofUP6_Bg', t: 'Cómo fidelizar clientes: 6 claves', c: 'Cyberclick' }],
        body: `
<ul>
<li><strong>La entrega es parte del producto:</strong> empaque bonito, nota escrita a mano y la tarjeta de cuidados.</li>
<li><strong>Pide una foto:</strong> "¿Me mandas una foto de dónde quedó tu cuadro?" Con permiso, compártela: es tu mejor prueba social.</li>
<li><strong>Agenda las fechas:</strong> anota el cumpleaños de tu clienta y para quién compró. Escríbele un mes antes de la próxima fecha.</li>
<li><strong>Recompensa la recomendación:</strong> un descuento o un llavero de regalo por cada amiga que te compre.</li>
<li><strong>Responde rápido</strong> y cumple los plazos. La confianza vende más que cualquier anuncio.</li>
</ul>
<h3>Mensaje modelo para después de la venta</h3>
<p class="quote">"¡Hola, [nombre]! Gracias por confiar en mi trabajo 💐 Espero que tu bordado te acompañe mucho tiempo. Cualquier cosa que necesites, aquí estoy. Si te animas a mandarme una foto de dónde quedó, ¡me haría muy feliz!"</p>`,
        practice: 'Crea una lista (en tu cuaderno o en tu celular) con nombre, fecha de compra, pieza y fecha especial de cada clienta.',
      },
    ],
  },
];

const PATTERNS = [
  { file: '01-peonia.svg', title: 'Peonía', level: 'Intermedio', lesson: 'm4-3', desc: 'La flor símbolo del bordado chino. 3 coronas de pétalos y 2 hojas.' },
  { file: '02-rosa-y-capullos.svg', title: 'Rosa y capullos', level: 'Principiante', lesson: 'm4-2', desc: 'Para practicar pétalos de atrás y de adelante.' },
  { file: '03-ejercicio-direccion-del-hilo.svg', title: 'Ejercicio: dirección del hilo', level: 'Principiante', lesson: 'm3-1', desc: 'Pétalos y hojas con las líneas guía de dirección marcadas.' },
  { file: '04-pajaro-en-rama.svg', title: 'Pájaro en rama', level: 'Intermedio', lesson: 'm5-1', desc: 'Un pájaro con flores de cerezo. Ideal para cuadros.' },
  { file: '05-mariposa.svg', title: 'Mariposa', level: 'Principiante', lesson: 'm5-2', desc: 'Alas simétricas para practicar degradados intensos.' },
  { file: '06-ramito-pequeno.svg', title: 'Ramito pequeño', level: 'Principiante', lesson: 'm9-1', desc: 'Para toallas, cojines, recuerdos y servilletas.' },
  { file: '07-ejercicio-degradado.svg', title: 'Ejercicio: degradado en 5 tonos', level: 'Principiante', lesson: 'm6-3', desc: 'Un pétalo grande dividido en 5 zonas de color.' },
];
