import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this if deploying to subdirectory
  
  // Optimizations for production
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  
  // Development server
  server: {
    port: 5173,
    host: true
  },
  
  // Preview server
  preview: {
    port: 4173,
    host: true
  }
});