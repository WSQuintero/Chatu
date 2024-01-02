import io from 'socket.io-client'
export const socket = io(
  'https://chatu-backend-dev-aktd.1.us-1.fl0.io',
  // 'http://localhost:3001',
  {
    withCredentials: true
  }
)
