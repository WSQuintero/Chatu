import { useSelector } from 'react-redux'
import { getSelectedFriendSs } from '../../helpers/getSelectedFriendSs'
import { getUserSs } from '../../helpers/getUserSs'
import { socket } from '../../socket/socket'
import { useSearchAndUpdateMessagesFriend } from '../useSearchAndUpdateMessagesFriend'

function useSendMessage() {
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)
  const selectedFriend = useSelector((state) => state.selectedFriend)
  const idConnection = useSelector((state) => state.idConnection)
  const selectedFriendSs = getSelectedFriendSs()
  const { searchAndUpdateFriend } = useSearchAndUpdateMessagesFriend()

  const handleSendMessage = (event) => {
    event.preventDefault()
    const message = event.target.elements.message.value
    const informationToSend = {
      message,
      sender: loggedUser.email || sessionUser.email,
      receiver: selectedFriend.email || selectedFriendSs.email,
      idConnection
    }
    console.log(informationToSend)
    emitMessage(informationToSend, event)
    searchAndUpdateFriend({
      email: selectedFriend.email || selectedFriendSs.email,
      newInfo: informationToSend
    })
  }

  const emitMessage = (informationToSend, event) => {
    socket.emit('message', informationToSend)
    event.target.elements.message.value = ''
  }

  return { handleSendMessage }
}

export { useSendMessage }
