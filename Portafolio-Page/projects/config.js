// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'projects/laboral/mwwmp305/index.html'),
        desktop: resolve(__dirname, 'projects/laboral/mwwmp305/desktop/index.html'),
        mobile: resolve(__dirname, 'projects/laboral/mwwmp305/mobile/index.html'),
      },
    },

    assetsDir: 'projects/laboral/mwwmp305/assets/',
  },
});
