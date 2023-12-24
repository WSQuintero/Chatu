import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

function useRedirectOnAuthentication () {
  const { authenticate } = useContext(MyContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (authenticate.login.authenticatedUser) {
      if (window.innerWidth >= 800) {
        navigate('/chat-desktop')
      } else {
        navigate('/active-chats')
      }
    }
  }, [authenticate.login.authenticatedUser, navigate])
}

export { useRedirectOnAuthentication }
