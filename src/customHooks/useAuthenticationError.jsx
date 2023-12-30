import { useEffect } from 'react'
import { useAuthentication } from './useAuthentication'
import { loginErrors } from '../helpers/loginErrors'

function useAuthenticationError(searchActualUser, setErrorLogin) {
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
  return { login }
}

export { useAuthenticationError }
