import { useEffect, useState } from 'react'
import { useSearchUserByEmail } from '../useSearchUserByEmail'
import { createUpdatedInformation } from '../../helpers/createUpdatedInformation'
import { useDispatch } from 'react-redux'
import {
  resetNewFriend,
  updateNewFriend
} from '../../redux/slices/newFriendSlice'

function useSearchNewFriend() {
  const searchNewFriend = useSearchUserByEmail()
  const [friendNoExist, setFriendNoExist] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setFriendNoExist(false)
    dispatch(resetNewFriend())
    if (searchNewFriend.foundUser) {
      const newFriend = createUpdatedInformation(searchNewFriend.foundUser)
      dispatch(updateNewFriend(newFriend))
      setFriendNoExist(false)
    }
  }, [searchNewFriend.foundUser])

  useEffect(() => {
    if (searchNewFriend.errorSearchUser) {
      setFriendNoExist(true)
      setTimeout(() => {
        setFriendNoExist(false)
      }, 2000)
    }
  }, [searchNewFriend.errorSearchUser])
  return { searchNewFriend, friendNoExist }
}

export { useSearchNewFriend }
