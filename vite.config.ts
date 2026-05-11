import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {viteSingleFile} from 'vite-plugin-singlefile';

export default defineConfig(() => {
  return {
    // GitHub Pages deploys to /Handelsrecht/ subdirectory
    base: '/Handelsrecht/',
    plugins: [react(), tailwindcss(), viteSingleFile()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Produce a single self-contained index.html that works via file://
      // by inlining all JS and CSS and avoiding code-splitting/module-preload.
      assetsInlineLimit: 100000000,
      cssCodeSplit: false,
      modulePreload: {polyfill: false},
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          manualChunks: undefined,
        },
      },
    },
  };
});
