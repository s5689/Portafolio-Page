import './modulepreload-polyfill-3cfb730f.js';
function p(e) {
  return document.getElementById(e);
}
function c(e) {
  return document.querySelector(e);
}
function u(e, o) {
  document.querySelectorAll(e).forEach((s, d) => {
    o(s, d);
  });
}
const l = p('intro'),
  f = p('app');
function L() {
  setTimeout(() => {
    l.style.opacity = 1;
  }, 500),
    setTimeout(() => {
      f.style.opacity = 1;
    }, 2500),
    setTimeout(() => {
      (l.style.opacity = 0),
        setTimeout(() => {
          l.style.display = 'none';
        }, 250);
    }, 5e3);
}
function T(e) {
  (l.style.display = 'none'),
    p('background-project').setAttribute('hidden', ''),
    u(`[n="${e}"]`, (o) => o.setAttribute('selected', '')),
    setTimeout(() => {
      f.style.opacity = 1;
    }, 500);
}
const y = [
    {
      title: 'Snake en 8K',
      type: 'game',
      short_desc: 'Clásico juego de Snake <br/><del>(No está en 8K)</del>',
      tech: 'HTML5, CSS, JavaScript y Memes.',
      reason: `
      Deseaba crear un juego durante mis ratos libres. <br/><br/>
      Simple, rápido, muy tonto, con un sentido del humor <b>cuestionable</b> y bastante didáctico.
    `,
      route: './projects/personal/snake',
    },
    {
      title: 'Mr. Worldwide Mp305',
      type: 'music',
      short_desc: 'Reproductor de Música',
      tech: 'HTML5, CSS, JavaScript, jQuery, Firebase Database, API Rest, Extensiones de Google Chrome y Estrés.',
      reason: `
      Escuchar diferentes canciones desde diferentes páginas web es un martirio. Por eso decidí crear un reproductor de uso personal para escucharles en una misma lista unificada.
      Reproduce canciones individuales de <i>YouTube Music</i> (incluyendo <i>YouTube</i>), <i>SoundCloud</i>, <i>Spotify</i> y les organiza de forma cómoda y agradable. <br/><br/>
      <i style='position: absolute; right: 0;'><ins>Un reproductor para gobernarlos a todos.</ins></i>`,
      route: './projects/personal/mwwmp305',
    },
    {
      title: 'ASCII Pain(t)',
      type: 'draw',
      short_desc: 'Herramienta de Dibujo <br/>(Aun en desarrollo)',
      tech: 'HTML5, CSS, JavaScript y Photoshop.',
      reason: `
      Hacer <i>ASCII Art</i> (dibujos hechos a base de caracteres) en el bloc de notas es realmente tedioso, sumado a que me fue imposible conseguir alguna aplicación que fuera lo 
      suficientemente cómoda para dibujar de forma continua. Así que dado que no logre encontrarle, decidí hacerle por mi cuenta. <br/><br/>
      La principal aspiración del proyecto es que sea, a nivel básico, tan cómodo y versátil como Photoshop (en este caso en versión caracteres).`,
      route: './projects/personal/ascii_paint',
    },
    {
      title: 'Portafolio HD',
      type: 'bag',
      short_desc: 'Portafolio Personal <br/><del>(No es precisamente HD)</del>',
      tech: 'HTML5, CSS, JavaScript y Muchos Proyectos.',
      reason: `
      <i><del>Esta aplicación, básicamente.</del></i><br/><br/>
      
      La necesidad de crear una interfaz de uso simple y amigable trajo consigo el requerimiento brindar una navegación sencilla e intuitiva para los usuarios interesados en el portafolio, 
      además de asegurar una estructura escalable y ampliable a futuros proyectos. Es decir, cuanta más experiencia laboral obtenga, más amplios serán los elementos de la lista. 
      Ciertamente, es algo que te llena de <i>determinación</i>.
    `,
      route: './projects/personal/portafolio',
    },
  ],
  v = [
    {
      title: 'Bingo',
      type: 'game',
      short_desc: 'Juego de Azar',
      tech: 'HTML5, CSS, JavaScript, jQuery, Matter.js y Fórmulas Físicas.',
      reason: `
      Prototipo cliente del Clásico Juego de Azar <ins><i>Bingo 25</i></ins>.<br/>
      El juego se ejecuta de forma automática hasta que alguno de los cartones en mano se llene y genere un <b><i>BINGO</i></b>.<br/>
      La intención principal era ofrecer un juego en línea rápido e ininterrumpido donde se apostaran cantidades fijas de dinero por cada ronda y el ganador se llevara 
      todo el monto apostado entre los jugadores.
    `,
      route: './projects/laboral/bingo',
    },
    {
      title: 'Calculadora Parley',
      type: 'calculator',
      short_desc: 'Herramienta de Cálculo de Ganancias.',
      tech: 'HTML5, CSS, JavaScript, React.js, Redux.js, Redux-Saga, Semantic UI y Estadística.',
      reason: `
      Propuesta en respuesta a las solicitudes de los jugadores de incorporar una calculadora de ganancias en la plataforma de apuestas.<br/>
      La aplicación calcula las ganancias obtenidas a base de las cuotas en formatos Decimales, Americanos y Fraccionarios <i>(seleccionable por el jugador)</i>, además de convertirles 
      a dichas unidades en cada cuota.<br/>
      Permite también calcular las ganancias obtenidas en apuestas múltiples y especifica las ganancias líquidas y brutas obtenidas en las apuestas, de ser ganadoras.
    `,
      route: './projects/laboral/calculadora',
    },
    {
      title: 'Dados en 4K',
      type: 'game',
      short_desc: 'Juego de Azar<br/>(Nombre Provisional)',
      tech: 'HTML5, CSS, JavaScript, React.js, Redux.js, Redux-Saga, Semantic UI, Three.js y Dados.',
      reason: `
      Prototipo cliente de un minijuego de Azar basado en apuestas con Dados.<br/>
      El objetivo era desarrollar un juego de azar de 1 jugador donde el usuario tuviera la oportunidad de apostar de forma rápida y fácil.<br/>
      <ins><i>• Apuesta a Total:</i></ins> Se debe predecir cuál número dará como resultado en la suma de todos los Dados seleccionados.<br/>
      <ins><i>• Apuesta a Par/Impar:</i></ins> Se debe predecir la cantidad de Dados pares e impares que saldrán según la cantidad de dados seleccionados previamente.
    `,
      route: './projects/laboral/dados',
    },
  ],
  m = y.concat(v);
let g = !1;
function A() {
  const e = c('#personal .projects'),
    o = c('#laboral .projects'),
    r = [
      { name: 'game', path: './assets/gamepad.svg' },
      { name: 'music', path: './assets/music.svg' },
      { name: 'draw', path: './assets/draw.svg' },
      { name: 'bag', path: './assets/portafolio.svg' },
      { name: 'calculator', path: './assets/calculator.svg' },
    ];
  s(y, e), s(v, o);
  function s(d, a) {
    d.forEach((t) => {
      const i = document.createElement('div'),
        j = r.find((n) => n.name === t.type),
        b = m.findIndex((n) => n.title === t.title);
      i.setAttribute('n', b),
        i.classList.add('list-item'),
        (i.innerHTML = `
        <div class="item-thumb">
          <img src='${j.path}' draggable="false" />
        </div>
        
        <div class='item-text'>
          <p class='text-title'><b>${t.title}</b></p>
          <p class='text-desc'><i>${t.short_desc}</i></p>
        </div>
      `),
        i.addEventListener('click', () => {
          const n = c('#list [selected]'),
            S = c('#project-info [selected]');
          n !== null && n !== i && (S.removeAttribute('selected'), n.removeAttribute('selected')),
            n !== i &&
              (c(`#project-info [n='${b}']`).setAttribute('selected', ''),
              i.setAttribute('selected', ''),
              g ||
                (setTimeout(() => {
                  c('#background-project').setAttribute('hidden', '');
                }, 500),
                (g = !0)));
        }),
        a.appendChild(i);
    });
  }
}
function P() {
  const e = c('#project-info');
  m.forEach((o, r) => {
    const s = document.createElement('div');
    s.setAttribute('n', r),
      s.classList.add('project-item'),
      (s.innerHTML = `
      <div class='project-preview'>
        <img src='${o.route}/preview.png' draggable="false" />
        <h1>Ir al Proyecto</h1>
      </div>
        
      <div class='project-container'>
        <div class='project-title'><p><b>${o.title}</b></p></div>
        <div class='project-tech'><p><b>Tecnologías Usadas:</b> <i>${o.tech}</i></p></div>
        <div class='project-reason'><p>${o.reason}</p></div>
      </div>
    `),
      e.appendChild(s);
  }),
    M();
}
function M() {
  const e = [];
  let o = !1,
    r = !1;
  u('.project-preview img', (a, t) => {
    e.push({ img: a, h1: null }),
      a.addEventListener('mouseenter', () => s(!0, t)),
      a.addEventListener('mouseleave', () => s(!1, t)),
      a.addEventListener('click', () => d(t));
  }),
    u('.project-preview h1', (a, t) => {
      (e[t].h1 = a),
        a.addEventListener('mouseenter', () => (o = !0)),
        a.addEventListener('mouseleave', () => (o = !1)),
        a.addEventListener('click', () => d(t));
    });
  function s(a, t) {
    setTimeout(() => {
      a && !o && !r && ((r = !0), (e[t].img.style = 'filter: blur(10px); box-shadow: 0px 0px 15px white;'), (e[t].h1.style = 'opacity: 1')),
        !a && !o && ((r = !1), e[t].img.removeAttribute('style'), e[t].h1.removeAttribute('style'));
    }, 1);
  }
  function d(a) {
    (c('#app').style.opacity = 0),
      setTimeout(() => {
        window.location.href = `${m[a].route}/index.html`;
      }, 500);
  }
}
const h = new URLSearchParams(window.location.search).get('prev');
A();
P();
h === null ? L() : T(h);
