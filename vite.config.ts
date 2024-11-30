import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**']
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Dividir React en un chunk separado
          react: ['react', 'react-dom'],
          // Dividir librerías grandes en chunks específicos
          lodash: ['lodash']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Ajustar límite de advertencia a 1 MB
  },
  optimizeDeps: {
    include: ['tailwind-config']
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'tailwind-config': fileURLToPath(new URL('./tailwind.config.js', import.meta.url))
    }
  }
})
