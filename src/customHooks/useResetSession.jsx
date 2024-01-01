import { useDispatch } from 'react-redux'
import { resetLoggedUser } from '../redux/slices/loggedUserSlice'
import { newUserInformation } from '../helpers/newUserInformation'
import { useEffect } from 'react'
import { setUserSstorage } from '../helpers/setUserSstorage'
import { setSelectedFriendSs } from '../helpers/setSelectedFriendSs'
import { resetSelectedFriend } from '../redux/slices/selectedFriendSlice'
import { socket } from '../socket/socket'

function useResetSession() {
  const dispatch = useDispatch()

  useEffect(() => {
    setSelectedFriendSs('')
    dispatch(resetSelectedFriend())
    dispatch(resetLoggedUser())
    setUserSstorage({ ...newUserInformation })
    socket.emit('leave', true)
  }, [])
  return true
}

export { useResetSession }
