import { getUserSs } from '../../helpers/getUserSs'
import { useSelector } from 'react-redux'

function ChatMessages() {
  const messages = useSelector((state) => state.messages)
  const friend = useSelector((state) => state.selectedFriend)
  const idConnection = useSelector((state) => state.idConnection)
  const sessionUser = getUserSs()

  return (
    <ul className='h-11/12 pt-5 bg-white w-full gap-5 flex flex-col '>
      {messages
        .filter((mss) => mss.idConnection === idConnection)
        .map((message, index) =>
          message.sender === sessionUser.email ? (
            <li key={index} className='flex justify-end gap-2'>
              <p className=' break-all bg-[#D7FFD7] w-auto px-5 rounded-bl-2xl'>
                {message.message}
              </p>
              <span className='break-all w-1/5 '> {sessionUser.name}</span>
            </li>
          ) : message.sender === friend.email ? (
            <li key={index} className='flex justify-start gap-2 text-[#088AE1]'>
              <span className='break-all'>{friend.name}: </span>
              <p className=' break-all bg-[#50EAFF]/40 w-auto px-5 rounded-br-2xl'>
                {message.message}
              </p>
            </li>
          ) : (
            false
          )
        )}
    </ul>
  )
}

export { ChatMessages }
