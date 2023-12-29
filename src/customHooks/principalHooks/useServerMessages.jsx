import { useEffect, useState } from 'react'
import { socket } from '../../socket/socket'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages } from '../../redux/slices/messagesSlice'

function useServerMessages() {
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages)
  const [test, setTest] = useState([])

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
    dispatch(
      updateMessages(messages[0]?.message ? [...messages, test] : [test])
    )
  }, [test])
}

export { useServerMessages }
