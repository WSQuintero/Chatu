import { useEffect, useState } from 'react'
import { socket } from '../socket/socket'

function useReceiveMessagesFromServer() {
  const [test, setTest] = useState(null)

  useEffect(() => {
    const receiveMessage = (message) => {
      const newMessage = {
        message: message.message,
        sender: message.sender,
        receiver: message.receiver,
        idConnection: message.idConnection
      }
      setTest(newMessage)
    }

    socket.on('message', receiveMessage)

    return () => socket.off('message', receiveMessage)
  }, [])
  return { test }
}

export { useReceiveMessagesFromServer }
