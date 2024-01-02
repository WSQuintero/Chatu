import { useEffect, useState } from 'react'
import { useSearchIdByEmail } from './useSearchIdByEmail'
import { useSelector } from 'react-redux'
import { getUserSs } from '../helpers/getUserSs'
import { useUpdateInformationUser } from './useUpdateInformationUser'

function useUpdateNewFriendInDb() {
  const [friendExist, setFriendExist] = useState(false)
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)
  const actualUser = loggedUser.email ? loggedUser : sessionUser
  const newFriend = useSelector((state) => state.newFriend)
  const { findUserId, userIdFound } = useSearchIdByEmail()
  const { updateUser, isOkayUpdate } = useUpdateInformationUser()

  useEffect(() => {
    if (userIdFound) {
      const updatedFriendOfUser = {
        ...actualUser,
        friends: [...actualUser?.friends, newFriend]
      }
      const friendNoExist = actualUser?.friends?.every(
        (friend) => friend.email !== newFriend.email
      )
      if (friendNoExist) {
        console.log({
          nameOfCollection: 'users',
          idDocument: userIdFound,
          newInformation: updatedFriendOfUser
        })
        updateUser({
          nameOfCollection: 'users',
          idDocument: userIdFound,
          newInformation: updatedFriendOfUser
        })
        setFriendExist(false)
      } else {
        setFriendExist(true)
        setTimeout(() => {
          setFriendExist(false)
        }, 2000)
      }
    }
  }, [userIdFound])
  return { findUserId, isOkayUpdate, friendExist }
}

export { useUpdateNewFriendInDb }
