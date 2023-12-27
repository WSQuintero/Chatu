import { useEffect } from 'react'
import { useSearchUserByEmail } from '../useSearchUserByEmail'
import { createUpdatedInformation } from '../../helpers/createUpdatedInformation'
import { useDispatch } from 'react-redux'
import { resetNewFriend, updateNewFriend } from '../../redux/slices/newFriendSlice'

function useSearchNewFriend () {
  const searchNewFriend = useSearchUserByEmail()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetNewFriend())
    if (searchNewFriend.foundUser) {
      const newFriend = createUpdatedInformation(searchNewFriend.foundUser)
      dispatch(updateNewFriend(newFriend))
    }
  }, [searchNewFriend.foundUser])
  return searchNewFriend
}

export { useSearchNewFriend }
