import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  define: {
    __APP_NAME__: JSON.stringify('BeeAI'),
  },
  server: {
    proxy: {
      '/mcp': {
        target: 'http://localhost:8333',
      },
      '/api': {
        target: 'http://localhost:8333',
      },
    },
  },
  resolve: {
    alias: {
      '~@ibm': resolve(__dirname, './node_modules/@ibm'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'styles/common' as *; @use 'sass:math';`,
        silenceDeprecations: ['mixed-decls', 'global-builtin'],
        loadPaths: [fileURLToPath(new URL('src/', import.meta.url))],
      },
    },
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
  },
});
