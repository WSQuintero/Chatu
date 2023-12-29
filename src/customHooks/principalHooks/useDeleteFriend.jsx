import { useSelector } from 'react-redux'
import { useSearchAndUpdateUserInfo } from '../useSearchAndUpdateUserInfo'
import { getUserSs } from '../../helpers/getUserSs'

function useDeleteFriend() {
  const { searchAndUpdateUser } = useSearchAndUpdateUserInfo()
  const loggedUser = useSelector((state) => state.loggedUser)
  const sessionUser = getUserSs()

  const handleDeleteFriend = (friendEmail) => {
    const filteredUser = (
      loggedUser.email ? loggedUser : sessionUser
    ).friends.filter((friend) => friend.email !== friendEmail)

    searchAndUpdateUser({
      email: loggedUser.email || sessionUser.email,
      newInfo: { friends: filteredUser }
    })
  }

  return { handleDeleteFriend }
}

export { useDeleteFriend }
