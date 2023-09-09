// Personal Projects
export const pp_data = [
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
      Esta aplicación, básicamente.<br/><br/>
      <i>Mi Portafolio, la aplicación en la que estas, es un éxito de ventas en toda habla hispana.<br/>
      Leelo. Sé, que te va a encantar.</i>
    `,
    route: './projects/personal/portafolio',
  },
];

// Laboral Projects
export const lp_data = [
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
];
``;
