import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { isUserAuthenticated } from '../redux/slices/userAtuhenticatedSlice'

function useAuthentication({ searchActualUser }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)
  const [authenticationError, setAuthenticationError] = useState(null)
  const dispatch = useDispatch()

  const authenticateUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthenticatedUser(userCredential.user)
        searchActualUser.searchUser.searchUserByEmail(email)
        dispatch(isUserAuthenticated(true))
      })
      .catch((error) => {
        setAuthenticationError(String(error.code))
        setTimeout(() => {
          setAuthenticationError(null)
        }, 2000)
      })
  }

  return {
    authenticateUser,
    authenticatedUser,
    authenticationError,
    setAuthenticatedUser
  }
}

export { useAuthentication }
