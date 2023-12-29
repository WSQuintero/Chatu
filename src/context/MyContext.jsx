import { createContext } from 'react'
import { useFetchAndUpdateUser } from '../customHooks/principalHooks/useFetchAndUpdateUser'
import { useAuthenticationAndErrorHandling } from '../customHooks/principalHooks/useAuthenticationAndErrorHandling'
import { useUserCreationAndErrorHandling } from '../customHooks/principalHooks/useUserCreationAndErrorHandling'
import { useUserRegistrationInDatabase } from '../customHooks/principalHooks/useUserRegistrationInDatabase'
import { useSearchNewFriend } from '../customHooks/principalHooks/useSearchNewFriend'
import { UseAddNewFriend } from '../customHooks/principalHooks/useAddNewFriend'
import { useDeleteFriend } from '../customHooks/principalHooks/useDeleteFriend'
import { useUpdateUserImg } from '../customHooks/principalHooks/useUpdateUserImg'

const MyContext = createContext()

function ContextProvider({ children }) {
  const searchActualUser = useFetchAndUpdateUser()
  const authenticate = useAuthenticationAndErrorHandling({ searchActualUser })
  const signUpData = useUserCreationAndErrorHandling()
  const { userRegistrationInfoDb } = useUserRegistrationInDatabase(signUpData)
  const getFriend = useSearchNewFriend()
  const addNewFriend = UseAddNewFriend()
  const deleteFriend = useDeleteFriend()
  const updateUserImg = useUpdateUserImg()

  return (
    <MyContext.Provider
      value={{
        authenticate,
        searchActualUser,
        userRegistrationInfoDb,
        signUpData,
        getFriend,
        addNewFriend,
        deleteFriend,
        updateUserImg
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
