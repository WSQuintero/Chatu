import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://chatu-two.vercel.app',
  server: {
    proxy: {
      '/(.*)': {
        target:
          //  'http://localhost:3001',
          'https://chatu-back-two.onrender.com',
        ws: true
      }
    }
  }
})
