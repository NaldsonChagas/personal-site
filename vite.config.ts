import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { imagetools } from 'vite-imagetools';
import { fileURLToPath, URL } from 'node:url';
import { critical } from './vite-plugin-critical';

export default defineConfig({
  plugins: [vue(), tailwindcss(), imagetools(), critical()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist/public',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vendor-vue';
            }
            if (id.includes('vue-router')) {
              return 'vendor-router';
            }
            if (id.includes('@fontsource')) {
              return 'vendor-fonts';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
