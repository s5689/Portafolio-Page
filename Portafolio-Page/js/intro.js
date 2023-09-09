import { g, q } from './lib';

const intro = g('intro');
const app = g('app');

// Inicializar animacion normal
export function initIntro() {
  setTimeout(() => {
    intro.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    app.style.opacity = 1;
  }, 2500);

  setTimeout(() => {
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = 'none';
    }, 250);
  }, 5000);
}

// Inicializar desde el proyecto anterior
export function skipIntro(n) {
  intro.style.display = 'none';

  g('background-project').setAttribute('hidden', '');
  q(`[n="${n}"]`, (e) => e.setAttribute('selected', ''));

  setTimeout(() => {
    app.style.opacity = 1;
  }, 500);
}

// Ignorar animacion
export function dev() {
  intro.style.display = 'none';
  app.style.transition = 'none';
  app.style.opacity = 1;
}
