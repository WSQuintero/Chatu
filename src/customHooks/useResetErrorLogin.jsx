import { useEffect } from 'react'

function useResetErrorLogin(errorLogin, setErrorLogin) {
  useEffect(() => {
    if (errorLogin) {
      setTimeout(() => {
        setErrorLogin('')
      }, 2000)
    }
  }, [errorLogin])
}

export { useResetErrorLogin }
