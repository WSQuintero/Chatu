import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function useSignUp () {
  const [signedUpUser, setSignedUpUser] = useState(null)
  const [signUpError, setSignUpError] = useState({})

  const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignedUpUser(userCredential.user)
      })
      .catch((error) => {
        setSignUpError(error.code)
      })
  }

  return { signUpUser, signedUpUser, signUpError }
}

export { useSignUp }
