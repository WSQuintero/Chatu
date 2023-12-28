import { useEffect, useState } from 'react'
import { useSearchIdByEmail } from '../useSearchIdByEmail'
import { useUpdateInformationUser } from '../useUpdateInformationUser'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserLogged } from '../../redux/slices/loggedUserSlice'

function UseAddNewFriend() {
  const { findUserId, userIdFound } = useSearchIdByEmail()
  const { updateUser, isOkayUpdate } = useUpdateInformationUser()
  const [friendExist, setFriendExist] = useState(false)
  const newFriend = useSelector((state) => state.newFriend)
  const sessionUser = JSON.parse(sessionStorage.getItem('loggedUser'))
  const loggedUser = useSelector((state) => state.loggedUser)
  const dispatch = useDispatch()

  const updatedFriendOfUser = {
    ...(loggedUser.email ? loggedUser : sessionUser),
    friends: [
      ...(loggedUser.email ? loggedUser : sessionUser).friends,
      newFriend
    ]
  }

  useEffect(() => {
    if (userIdFound) {
      if (
        (loggedUser.email ? loggedUser : sessionUser).friends.every(
          (friend) => friend.email !== newFriend.email
        )
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
    if (isOkayUpdate) {
      console.log(isOkayUpdate)
      sessionStorage.setItem('loggedUser', JSON.stringify(updatedFriendOfUser))
      dispatch(updateUserLogged(updatedFriendOfUser))
    }
  }, [isOkayUpdate])

  return { findUserId, isOkayUpdate, friendExist }
}

export { UseAddNewFriend }
