import { dev, initIntro, skipIntro } from './intro';
import { buildList, buildProjects } from './build';

const param = new URLSearchParams(window.location.search).get('prev');

buildList();
buildProjects();

if (param === null) {
  initIntro();
} else {
  skipIntro(param);
}

// dev();
