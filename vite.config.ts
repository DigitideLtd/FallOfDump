import { defineConfig } from 'vite';

// VITE_BASE lets gh-pages-style deploys set the public path (e.g. "/repo/").
// Defaults to "/" so dev + custom-domain hosting both work without config.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});
