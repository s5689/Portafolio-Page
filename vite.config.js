// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Portafolio-Page/docs/index.html'),

        snake: resolve(__dirname, 'Portafolio-Page/docs/projects/personal/snake/index.html'),
        mww: resolve(__dirname, 'Portafolio-Page/docs/projects/personal/mwwmp305/index.html'),
        ascii: resolve(__dirname, 'Portafolio-Page/docs/projects/personal/ascii_paint/index.html'),
        portafolio: resolve(__dirname, 'Portafolio-Page/docs/projects/personal/portafolio/index.html'),

        bingo: resolve(__dirname, 'Portafolio-Page/docs/projects/laboral/bingo/index.html'),
        calculadora: resolve(__dirname, 'Portafolio-Page/docs/projects/laboral/calculadora/index.html'),
        dados: resolve(__dirname, 'Portafolio-Page/docs/projects/laboral/dados/index.html'),
      },
    },

    assetsDir: 'Portafolio-Page/docs/assets/',
  },
});
