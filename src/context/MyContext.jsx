import { createContext } from 'react'
import { useFetchAndUpdateUser } from '../customHooks/principalHooks/useFetchAndUpdateUser'
import { useAuthenticationAndErrorHandling } from '../customHooks/principalHooks/useAuthenticationAndErrorHandling'
import { useUserCreationAndErrorHandling } from '../customHooks/principalHooks/useUserCreationAndErrorHandling'
import { useUserRegistrationInDatabase } from '../customHooks/principalHooks/useUserRegistrationInDatabase'

const MyContext = createContext()

function ContextProvider ({ children }) {
  const searchActualUser = useFetchAndUpdateUser()
  const authenticate = useAuthenticationAndErrorHandling({ searchActualUser })
  const signUpData = useUserCreationAndErrorHandling()
  const { userRegistrationInfoDb } = useUserRegistrationInDatabase(signUpData)

  return (
    <MyContext.Provider
      value={{
        authenticate,
        searchActualUser,
        userRegistrationInfoDb,
        signUpData
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
