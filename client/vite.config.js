import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      // Add alias for bootstrap
      'bootstrap': 'bootstrap/dist/css/bootstrap.min.css'
    }
  },
  plugins: [react()]
})
