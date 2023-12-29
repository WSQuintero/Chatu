import { useEffect, useState } from 'react'
import { useSearchUserByEmail } from '../useSearchUserByEmail'
import { createUpdatedInformation } from '../../helpers/createUpdatedInformation'
import { getUserSs } from '../../helpers/getUserSs'
import { useDispatch, useSelector } from 'react-redux'
import { openModalChat } from '../../redux/slices/openChatSlice'
import { socket } from '../../socket/socket'
import { updateSelectedFriend } from '../../redux/slices/selectedFriendSlice'
import { setSelectedFriendSs } from '../../helpers/setSelectedFriendSs'
import {
  resetIdConnection,
  updateIdConnection
} from '../../redux/slices/idConnectionSlice'

function useConnectSocket() {
  const dispatch = useDispatch()
  const sessionUser = getUserSs()
  const selectedFriend = useSelector((state) => state.selectedFriend)
  const { searchUserByEmail: searchFriendInformation, foundUser: foundFriend } =
    useSearchUserByEmail()
  const [goToChat, setGoToChat] = useState(false)

  const createIdConnection = (emilFriend) => {
    setGoToChat(false)
    searchFriendInformation(emilFriend)
  }

  const connectToRoom = (idConnection) => {
    dispatch(resetIdConnection())
    socket.emit('leave', true)
    dispatch(openModalChat(false))
    const connectionData = {
      id: idConnection,
      sender: sessionUser.email
    }

    socket.on('joinResponse', (response) => {
      if (response.success) {
        dispatch(updateIdConnection(idConnection))
        // console.log(`Usuario unido exitosamente a la sala: ${idConnection}`)
        window.innerWidth < 800
          ? setGoToChat(true)
          : dispatch(openModalChat(true))
      } else {
        console.error(`Error al unirse a la sala: ${response.error}`)
      }
    })

    socket.emit('join', connectionData)
  }

  useEffect(() => {
    if (foundFriend) {
      const friendUid = createUpdatedInformation(foundFriend).uid
      const idConnection = [friendUid, sessionUser.uid].sort().join('')
      connectToRoom(idConnection)
      dispatch(updateSelectedFriend(createUpdatedInformation(foundFriend)))
      setSelectedFriendSs(createUpdatedInformation(foundFriend))
    }
  }, [foundFriend])

  useEffect(() => {
    if (selectedFriend) {
      console.log(selectedFriend)
    }
  }, [selectedFriend])
  return { createIdConnection, goToChat }
}

export { useConnectSocket }
