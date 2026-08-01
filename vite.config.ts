import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss()
    ],
    build: {
      emptyOutDir: true,
      rollupOptions: {
        output: {
          // Force a single bundled client entry to ensure zero relative ES module import dependencies
          inlineDynamicImports: true,
          entryFileNames: `assets/app-[hash]-${Date.now()}.js`,
          chunkFileNames: `assets/chunk-[hash]-${Date.now()}.js`,
          assetFileNames: `assets/asset-[hash]-${Date.now()}.[ext]`,
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
