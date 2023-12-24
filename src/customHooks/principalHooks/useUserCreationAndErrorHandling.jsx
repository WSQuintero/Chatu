import { useEffect, useState } from 'react'
import { useSignUp } from '../useSignUp'
import { useDispatch, useSelector } from 'react-redux'
import { signUpErrors } from '../../helpers/signUpErrors'
import { resetNewUser, updateNewUser } from '../../redux/slices/newUserSlice'

function useUserCreationAndErrorHandling () {
  const dispatch = useDispatch()
  const signUp = useSignUp()
  const [errorSignUp, setErrorSignUp] = useState('')
  const signUpErrorData = { errorSignUp, setErrorSignUp }
  const newUserState = {
    newUser: useSelector((state) => state.newUser),
    updateNewUser: (updatedNewUser) => dispatch(updateNewUser(updatedNewUser)),
    resetNewUser: () => dispatch(resetNewUser())
  }
  useEffect(() => {
    if (signUpErrorData.errorSignUp) {
      setTimeout(() => {
        signUpErrorData.setErrorSignUp('')
      }, 2000)
    }
  }, [signUpErrorData.errorSignUp])

  useEffect(() => {
    if (signUp.signUpError) {
      for (const i in signUpErrors) {
        if (signUpErrors[i] === signUp.signUpError) {
          if (i === 'insufficientPasswordLengthError') { setErrorSignUp('Contraseña debe tener 6 o más carácteres') }
          if (i === 'userAlreadyExistsError') { setErrorSignUp('Usuario ya existente') }
        }
      }
    }
  }, [signUp.signUpError])
  return { newUserState, signUp, signUpErrorData }
}

export { useUserCreationAndErrorHandling }
