import { useSearchUserByEmail } from './useSearchUserByEmail'
import { useSearchIdByEmail } from './useSearchIdByEmail'
import { useEffect, useState } from 'react'
import { useUpdateInformationUser } from './useUpdateInformationUser'
import { createUpdatedInformation } from '../helpers/createUpdatedInformation'
import { useDispatch } from 'react-redux'
import { updateUserLogged } from '../redux/slices/loggedUserSlice'
import { setUserSstorage } from '../helpers/setUserSstorage'

function useSearchAndUpdateUserInfo() {
  const searchUserId = useSearchIdByEmail()
  const searchUserInfo = useSearchUserByEmail()
  const updateInfo = useUpdateInformationUser()
  const [newInformation, setNewInformation] = useState(null)
  const distpatch = useDispatch()

  const searchAndUpdateUser = ({ email, newInfo }) => {
    searchUserId.findUserId(email)
    searchUserInfo.searchUserByEmail(email)
    setNewInformation(newInfo)
  }

  useEffect(() => {
    if (
      searchUserId.userIdFound &&
      searchUserInfo.foundUser &&
      newInformation
    ) {
      const newInformationUser = {
        ...createUpdatedInformation(searchUserInfo.foundUser),
        ...newInformation
      }
      updateInfo.updateUser({
        nameOfCollection: 'users',
        idDocument: searchUserId.userIdFound,
        newInformation: newInformationUser
      })

      console.log(newInformationUser)
      setUserSstorage(newInformationUser)
      distpatch(updateUserLogged(newInformationUser))
    }
  }, [searchUserId.userIdFound, searchUserInfo.foundUser, newInformation])

  return { searchAndUpdateUser }
}

export { useSearchAndUpdateUserInfo }
