import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Add this line for GitHub Pages compatibility
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});