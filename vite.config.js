import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ include: '**/*.{jsx,js}' })],
  build: {
      rollupOptions: {
        input: 'src/main.jsx',
        output: {
          entryFileNames: 'main.js',
          format: 'es'
        }
      },
    outDir: 'dist',
    emptyOutDir: true
  }
});
