import { useNavigate } from 'react-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { socket } from '../../socket/socket'

function Logout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
      socket.emit('leave', true)
    })
  }
  return (
    <button
      onClick={handleLogout}
      className={`absolute right-3 top-2  bg-white p-2 rounded-full font-bold text-green-400 hover:bg-blue-500 hover:text-white`}>
      Logout
    </button>
  )
}

export { Logout }
