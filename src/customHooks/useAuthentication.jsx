import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'

function useAuthentication ({ searchActualUser }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)
  const [authenticationError, setAuthenticationError] = useState(null)

  const authenticateUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthenticatedUser(userCredential.user)
        searchActualUser.searchUser.searchUserByEmail(email)
      })
      .catch((error) => {
        setAuthenticationError(String(error.code))
        setTimeout(() => {
          setAuthenticationError(null)
        }, 2000)
      })
  }

  return { authenticateUser, authenticatedUser, authenticationError }
}

export { useAuthentication }
