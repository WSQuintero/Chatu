import { useEffect, useState } from 'react'
import { useSearchIdByEmail } from '../useSearchIdByEmail'
import { useUpdateInformationUser } from '../useUpdateInformationUser'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserLogged } from '../../redux/slices/loggedUserSlice'
import { setUserSstorage } from '../../helpers/setUserSstorage'
import { getUserSs } from '../../helpers/getUserSs'

function UseAddNewFriend() {
  const { findUserId, userIdFound } = useSearchIdByEmail()
  const { updateUser, isOkayUpdate } = useUpdateInformationUser()
  const [friendExist, setFriendExist] = useState(false)
  const newFriend = useSelector((state) => state.newFriend)
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)
  const actualUser = loggedUser.email ? loggedUser : sessionUser
  const dispatch = useDispatch()

  useEffect(() => {
    const updatedFriendOfUser = {
      ...actualUser,
      friends: [...actualUser?.friends, newFriend]
    }
    if (userIdFound) {
      if (
        actualUser.friends.every((friend) => friend.email !== newFriend.email)
      ) {
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

  useEffect(() => {
    const updatedFriendOfUser = {
      ...actualUser,
      friends: [...actualUser?.friends, newFriend]
    }
    if (isOkayUpdate) {
      setUserSstorage(updatedFriendOfUser)

      dispatch(updateUserLogged(updatedFriendOfUser))
    }
  }, [isOkayUpdate])

  return { findUserId, isOkayUpdate, friendExist }
}

export { UseAddNewFriend }
