import io from 'socket.io-client'
export const socket = io(
  'https://chatu-back-two.onrender.com',
  // 'http://localhost:3001',
  {
    withCredentials: true
  }
)
