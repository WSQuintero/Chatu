import { useState } from 'react'
import { useAuthenticationError } from '../useAuthenticationError'
import { useResetErrorLogin } from '../useResetErrorLogin'
import { useAddAuthenticationInSs } from '../useAddAuthenticationInSs'

function useAuthenticationAndErrorHandling({ searchActualUser }) {
  const [errorLogin, setErrorLogin] = useState('')

  const { login } = useAuthenticationError(searchActualUser, setErrorLogin)
  useResetErrorLogin(errorLogin, setErrorLogin)
  useAddAuthenticationInSs(searchActualUser)

  return { login, errorLogin }
}

export { useAuthenticationAndErrorHandling }
