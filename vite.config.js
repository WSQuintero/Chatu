import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/(.*)': {
        target: 'https://chatu-backend-dev-aktd.1.us-1.fl0.io',
        // 'https://chatu-backend-dev-aktd.1.us-1.fl0.io',
        ws: true
      }
    }
  }
})
