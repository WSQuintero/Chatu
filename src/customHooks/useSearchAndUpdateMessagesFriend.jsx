import { useSearchUserByEmail } from './useSearchUserByEmail'
import { useSearchIdByEmail } from './useSearchIdByEmail'
import { useEffect, useState } from 'react'
import { useUpdateInformationUser } from './useUpdateInformationUser'
import { createUpdatedInformation } from '../helpers/createUpdatedInformation'
import { useDispatch } from 'react-redux'
import { setSelectedFriendSs } from '../helpers/setSelectedFriendSs'
import { updateSelectedFriend } from '../redux/slices/selectedFriendSlice'

function useSearchAndUpdateMessagesFriend() {
  const searchFriendId = useSearchIdByEmail()
  const searchFriendInfo = useSearchUserByEmail()
  const updateInfo = useUpdateInformationUser()
  const [newInformation, setNewInformation] = useState(null)
  const distpatch = useDispatch()

  const searchAndUpdateFriend = ({ email, newInfo }) => {
    searchFriendId.findUserId(email)
    searchFriendInfo.searchUserByEmail(email)
    setNewInformation(newInfo)
  }

  useEffect(() => {
    if (
      searchFriendId.userIdFound &&
      searchFriendInfo.foundUser &&
      newInformation
    ) {
      const newInformationUser = {
        ...createUpdatedInformation(searchFriendInfo.foundUser),
        messages: [
          ...createUpdatedInformation(searchFriendInfo.foundUser).messages,
          newInformation
        ]
      }
      updateInfo.updateUser({
        nameOfCollection: 'users',
        idDocument: searchFriendId.userIdFound,
        newInformation: newInformationUser
      })

      distpatch(updateSelectedFriend(newInformationUser))
      setSelectedFriendSs(newInformationUser)
    }
  }, [searchFriendId.userIdFound, searchFriendInfo.foundUser, newInformation])

  return { searchAndUpdateFriend }
}

export { useSearchAndUpdateMessagesFriend }
