import { useEffect } from 'react'
import { useSearchIdByEmail } from '../useSearchIdByEmail'
import { useUpdateInformationUser } from '../useUpdateInformationUser'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserLogged } from '../../redux/slices/loggedUserSlice'

function UseAddNewFriend () {
  const { findUserId, userIdFound } = useSearchIdByEmail()
  const { updateUser, isOkayUpdate } = useUpdateInformationUser()
  const newFriend = useSelector((state) => state.newFriend)
  const sessionUser = JSON.parse(sessionStorage.getItem('loggedUser'))
  const loggedUser = useSelector((state) => state.loggedUser)
  const dispatch = useDispatch()

  const updatedFriendOfUser = {
    ...(loggedUser.email ? loggedUser : sessionUser),
    friends: [...loggedUser.friends, newFriend]
  }

  useEffect(() => {
    if (userIdFound) {
      if ((loggedUser || sessionUser).friends.every((friend) => friend.email !== newFriend.email)) {
        updateUser({
          nameOfCollection: 'users',
          idDocument: userIdFound,
          newInformation: updatedFriendOfUser
        })
      } else {
        console.log(`Ya tienes a ${newFriend.name} como amigo`)
      }
    }
  }, [userIdFound])

  useEffect(() => {
    if (isOkayUpdate) {
      sessionStorage.setItem('loggedUser', JSON.stringify(updatedFriendOfUser))
      dispatch(updateUserLogged(updatedFriendOfUser))
    }
  }, [isOkayUpdate])

  return { findUserId, isOkayUpdate }
}

export { UseAddNewFriend }
