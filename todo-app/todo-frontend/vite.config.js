import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/todos': {
        target: 'http://hello-back-dev:3000',
        changeOrigin: true
      }
    }
  }
})