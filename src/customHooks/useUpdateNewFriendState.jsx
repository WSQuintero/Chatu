import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSs } from '../helpers/getUserSs'
import { setUserSstorage } from '../helpers/setUserSstorage'
import { updateUserLogged } from '../redux/slices/loggedUserSlice'

function useUpdateNewFriendState(isOkayUpdate) {
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)
  const actualUser = loggedUser.email ? loggedUser : sessionUser
  const dispatch = useDispatch()
  const newFriend = useSelector((state) => state.newFriend)

  useEffect(() => {
    if (isOkayUpdate) {
      const updatedFriendOfUser = {
        ...actualUser,
        friends: [...actualUser?.friends, newFriend]
      }
      setUserSstorage(updatedFriendOfUser)

      dispatch(updateUserLogged(updatedFriendOfUser))
    }
  }, [isOkayUpdate])
}

export { useUpdateNewFriendState }
