import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-dnd', 'react-dnd-html5-backend'], // Specify multiple external modules with commas
    },
  },
});
