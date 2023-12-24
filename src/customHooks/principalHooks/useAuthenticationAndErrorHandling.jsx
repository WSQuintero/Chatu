import { useEffect, useState } from 'react'
import { useAuthentication } from '../useAuthentication'
import { loginErrors } from '../../helpers/loginErrors'

function useAuthenticationAndErrorHandling ({ searchActualUser }) {
  const [errorLogin, setErrorLogin] = useState('')
  const login = useAuthentication({ searchActualUser })
  useEffect(() => {
    if (login.authenticationError) {
      for (const i in loginErrors) {
        if (loginErrors[i] === login.authenticationError) {
          if (i === 'emailOrPasswordError') { setErrorLogin('Usuario o contraseña errados') }
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
    sessionStorage.setItem('loggedUser', JSON.stringify(searchActualUser.userState.loggedUser))
  }, [searchActualUser.userState.loggedUser])

  return { login, errorLogin }
}

export { useAuthenticationAndErrorHandling }
