import { useEffect, useState } from 'react'
import { useAuthentication } from '../useAuthentication'
import { loginErrors } from '../../helpers/loginErrors'
import { setUserSstorage } from '../../helpers/setUserSstorage'

function useAuthenticationAndErrorHandling({ searchActualUser }) {
  const [errorLogin, setErrorLogin] = useState('')
  const login = useAuthentication({ searchActualUser })

  useEffect(() => {
    if (login.authenticationError) {
      for (const i in loginErrors) {
        if (loginErrors[i] === login.authenticationError) {
          if (i === 'emailOrPasswordError') {
            setErrorLogin('Usuario o contraseña errados')
          }
          if (i === 'userDisabled') setErrorLogin('Usuario deshabilitado')
          if (i === 'tooManyRequest') setErrorLogin('Demasiados intentos')
        }
      }
    }
  }, [login.authenticationError])

  useEffect(() => {
    if (errorLogin) {
      setTimeout(() => {
        setErrorLogin('')
      }, 2000)
    }
  }, [errorLogin])

  useEffect(() => {
    if (searchActualUser.userState.loggedUser.email) {
      setUserSstorage({
        ...searchActualUser.userState.loggedUser,
        isUserAuthenticated: true
      })
    }
  }, [searchActualUser.userState.loggedUser])

  return { login, errorLogin }
}

export { useAuthenticationAndErrorHandling }
