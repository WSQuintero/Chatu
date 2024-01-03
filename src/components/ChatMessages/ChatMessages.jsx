import { getUserSs } from '../../helpers/getUserSs'
import { useSelector } from 'react-redux'

function ChatMessages() {
  const friend = useSelector((state) => state.selectedFriend)
  const idConnection = useSelector((state) => state.idConnection)
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)

  return (
    <ul className='h-11/12 px-10 py-4 bg-white w-full gap-5 flex flex-col overflow-auto '>
      {(loggedUser.messages || sessionUser.messages)
        .filter((mss) => mss.idConnection === idConnection)
        .map((message, index) =>
          message.sender === sessionUser.email ? (
            <li key={index} className='flex justify-end gap-2'>
              <p className=' break-all bg-lightestGreen w-auto px-5 rounded-bl-2xl'>
                {message.message}
              </p>
              <span className='break-all'> {sessionUser.name}</span>
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
