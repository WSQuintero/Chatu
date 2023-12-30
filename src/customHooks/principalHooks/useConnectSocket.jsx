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
import { setUserSstorage } from '../../helpers/setUserSstorage'
import { updateUserLogged } from '../../redux/slices/loggedUserSlice'

function useConnectSocket() {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser)
  const sessionUser = getUserSs()
  const friendInformation = useSearchUserByEmail()
  const [goToChat, setGoToChat] = useState(false)
  const findUser = useSearchUserByEmail()
  const createIdConnection = (emailFriend) => {
    setGoToChat(false)
    friendInformation.searchUserByEmail(emailFriend)
  }

  const connectToRoom = (idConnection) => {
    findUser.searchUserByEmail(loggedUser.email || sessionUser.email)
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
    if (friendInformation.foundUser) {
      const friendUid = createUpdatedInformation(
        friendInformation.foundUser
      ).uid
      const idConnection = [friendUid, sessionUser.uid].sort().join('')
      connectToRoom(idConnection)
      dispatch(
        updateSelectedFriend(
          createUpdatedInformation(friendInformation.foundUser)
        )
      )
      setSelectedFriendSs(createUpdatedInformation(friendInformation.foundUser))
    }
  }, [friendInformation.foundUser])

  useEffect(() => {
    if (findUser.foundUser) {
      setUserSstorage(createUpdatedInformation(findUser.foundUser))
      dispatch(updateUserLogged(createUpdatedInformation(findUser.foundUser)))
    }
  }, [findUser.foundUser])
  return { createIdConnection, goToChat }
}

export { useConnectSocket }
