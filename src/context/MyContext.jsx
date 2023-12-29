import { createContext, useEffect } from 'react'
import { useFetchAndUpdateUser } from '../customHooks/principalHooks/useFetchAndUpdateUser'
import { useAuthenticationAndErrorHandling } from '../customHooks/principalHooks/useAuthenticationAndErrorHandling'
import { useUserCreationAndErrorHandling } from '../customHooks/principalHooks/useUserCreationAndErrorHandling'
import { useUserRegistrationInDatabase } from '../customHooks/principalHooks/useUserRegistrationInDatabase'
import { useSearchNewFriend } from '../customHooks/principalHooks/useSearchNewFriend'
import { UseAddNewFriend } from '../customHooks/principalHooks/useAddNewFriend'
import { useDeleteFriend } from '../customHooks/principalHooks/useDeleteFriend'
import { useUpdateUserImg } from '../customHooks/principalHooks/useUpdateUserImg'
import { useConnectSocket } from '../customHooks/principalHooks/useConnectSocket'
import { useServerMessages } from '../customHooks/principalHooks/useServerMessages'
import { useSelector } from 'react-redux'

const MyContext = createContext()

function ContextProvider({ children }) {
  const messages = useSelector((state) => state.messages)

  const searchActualUser = useFetchAndUpdateUser()
  const authenticate = useAuthenticationAndErrorHandling({ searchActualUser })
  const signUpData = useUserCreationAndErrorHandling()
  const { userRegistrationInfoDb } = useUserRegistrationInDatabase(signUpData)
  const getFriend = useSearchNewFriend()
  const addNewFriend = UseAddNewFriend()
  const deleteFriend = useDeleteFriend()
  const updateUserImg = useUpdateUserImg()
  const connectSocket = useConnectSocket()
  useServerMessages()

  useEffect(() => {
    console.log(messages)
  }, [messages])

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
        updateUserImg,
        connectSocket
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
