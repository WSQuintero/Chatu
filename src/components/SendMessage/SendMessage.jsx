import { LuSend } from 'react-icons/lu'
import { socket } from '../../socket/socket'
import { IconContext } from 'react-icons/lib'
import { getUserSs } from '../../helpers/getUserSs'
import { useSelector } from 'react-redux'
import { getSelectedFriendSs } from '../../helpers/getSelectedFriendSs'

function SendMessage() {
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)
  const selectedFriend = useSelector((state) => state.selectedFriend)
  const idConnection = useSelector((state) => state.idConnection)
  const selectedFriendSs = getSelectedFriendSs()

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = event.target.elements.message.value
    const informationToSend = {
      message,
      sender: (loggedUser || sessionUser).email,
      receiver: selectedFriend.email || selectedFriendSs.email,
      idConnection
    }

    socket.emit('message', informationToSend)
    event.target.elements.message.value = ''
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='h-1/12 bg-[#D7FFD7] flex w-full relative'>
      <textarea
        type='text'
        placeholder='Escribe tu mensaje...'
        name='message'
        className='w-full h-full outline-none pl-5 pr-20 overflow-hidden'
      />
      <button className='p-2 bg-[#008E00] rounded-tl-2xl absolute right-0 h-full grid place-content-center'>
        <IconContext.Provider value={{ color: 'white', size: '25px' }}>
          <LuSend />
        </IconContext.Provider>
      </button>
    </form>
  )
}

export { SendMessage }
