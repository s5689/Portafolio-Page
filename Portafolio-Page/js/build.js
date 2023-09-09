import { pp_data, lp_data } from './list';
import { $, q } from './lib';

const projects = pp_data.concat(lp_data);
let hiddenBackground = false;

export function buildList() {
  const pp_html = $('#personal .projects');
  const lp_html = $('#laboral .projects');

  const thumb = [
    {
      name: 'game',
      path: './assets/gamepad.svg',
    },
    {
      name: 'music',
      path: './assets/music.svg',
    },
    {
      name: 'draw',
      path: './assets/draw.svg',
    },
    {
      name: 'bag',
      path: './assets/portafolio.svg',
    },
    {
      name: 'calculator',
      path: './assets/calculator.svg',
    },
  ];

  generate(pp_data, pp_html);
  generate(lp_data, lp_html);

  function generate(e, html) {
    // Construir HTML a cada elemento de la lista
    e.forEach((value) => {
      const currentHTML = document.createElement('div');
      const img = thumb.find((valua) => valua.name === value.type);
      const n = projects.findIndex((valua) => valua.title === value.title);

      currentHTML.setAttribute('n', n);
      currentHTML.classList.add('list-item');
      currentHTML.innerHTML = `
        <div class="item-thumb">
          <img src='${img.path}' draggable="false" />
        </div>
        
        <div class='item-text'>
          <p class='text-title'><b>${value.title}</b></p>
          <p class='text-desc'><i>${value.short_desc}</i></p>
        </div>
      `;

      // Agregar Eventos
      currentHTML.addEventListener('click', () => {
        const prevList = $('#list [selected]');
        const prevProject = $('#project-info [selected]');

        // Si hay una seleccion previa y no es la actual: Remover estado de seleccion.
        if (prevList !== null && prevList !== currentHTML) {
          prevProject.removeAttribute('selected');
          prevList.removeAttribute('selected');
        }

        // Si el item seleccionado no es el actual: Aplicar nueva seleccion.
        if (prevList !== currentHTML) {
          // Manejar proyectos por indice en el array de todos los proyectos juntos.
          const foundProject = $(`#project-info [n='${n}']`);

          foundProject.setAttribute('selected', '');
          currentHTML.setAttribute('selected', '');

          // Ocultar Background Project al seleccionar primer proyecto para evitar errores graficos.
          if (!hiddenBackground) {
            setTimeout(() => {
              $('#background-project').setAttribute('hidden', '');
            }, 500);

            hiddenBackground = true;
          }
        }
      });

      html.appendChild(currentHTML);
    });
  }
}

export function buildProjects() {
  const projectsHTML = $('#project-info');

  projects.forEach((value, k) => {
    const currentHTML = document.createElement('div');

    currentHTML.setAttribute('n', k);
    currentHTML.classList.add('project-item');
    currentHTML.innerHTML = `
      <div class='project-preview'>
        <img src='${value.route}/preview.png' draggable="false" />
        <h1>Ir al Proyecto</h1>
      </div>
        
      <div class='project-container'>
        <div class='project-title'><p><b>${value.title}</b></p></div>
        <div class='project-tech'><p><b>Tecnologías Usadas:</b> <i>${value.tech}</i></p></div>
        <div class='project-reason'><p>${value.reason}</p></div>
      </div>
    `;

    projectsHTML.appendChild(currentHTML);
  });

  // Construir Eventos
  previewEvents();
}

function previewEvents() {
  const previewHTMLs = [];
  let h1 = false;
  let inside = false;

  //Asignar eventos en los respectivos elementos del preview
  q('.project-preview img', (e, k) => {
    previewHTMLs.push({ img: e, h1: null });

    e.addEventListener('mouseenter', () => previewManager(true, k));
    e.addEventListener('mouseleave', () => previewManager(false, k));
    e.addEventListener('click', () => goto(k));
  });

  q('.project-preview h1', (e, k) => {
    previewHTMLs[k].h1 = e;

    e.addEventListener('mouseenter', () => (h1 = true));
    e.addEventListener('mouseleave', () => (h1 = false));
    e.addEventListener('click', () => goto(k));
  });

  // Animaciones en el preview del proyecto
  function previewManager(e, k) {
    setTimeout(() => {
      // In
      if (e && !h1 && !inside) {
        inside = true;

        previewHTMLs[k].img.style = 'filter: blur(10px); box-shadow: 0px 0px 15px white;';
        previewHTMLs[k].h1.style = 'opacity: 1';
      }

      // Out
      if (!e && !h1) {
        inside = false;

        previewHTMLs[k].img.removeAttribute('style');
        previewHTMLs[k].h1.removeAttribute('style');
      }
    }, 1);
  }

  // Redireccionar a los proyectos
  function goto(e) {
    $('#app').style.opacity = 0;

    setTimeout(() => {
      window.location.href = `${projects[e].route}/index.html`;
    }, 500);
  }
}
