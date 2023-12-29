import { useEffect, useState } from 'react'
import { socket } from '../../socket/socket'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages } from '../../redux/slices/messagesSlice'
import { getUserSs } from '../../helpers/getUserSs'
import { useSearchAndUpdateUserInfo } from '../useSearchAndUpdateUserInfo'

function useServerMessages() {
  const dispatch = useDispatch()
  const sessionUser = getUserSs()
  const messages = useSelector((state) => state.messages)
  const [test, setTest] = useState([])
  const { searchAndUpdateUser } = useSearchAndUpdateUserInfo()

  useEffect(() => {
    const receiveMessage = (message) => {
      const newMessage = {
        message: message.message,
        // user: isUse/rOrFriend,
        sender: message.sender,
        receiver: message.receiver,
        idConnection: message.idConnection
        // idConnection
      }
      setTest(newMessage)
    }

    socket.on('message', receiveMessage)

    return () => socket.off('message', receiveMessage)
  }, [])

  useEffect(() => {
    if (!messages[0]?.message) {
      dispatch(updateMessages(sessionUser.messages))
    } else {
      dispatch(
        updateMessages(messages[0]?.message ? [...messages, test] : [test])
      )
    }
  }, [test])

  useEffect(() => {
    if (messages[0]?.message) {
      searchAndUpdateUser({
        email: sessionUser.email,
        newInfo: { ...sessionUser, messages }
      })
    }
  }, [messages])
}

export { useServerMessages }
