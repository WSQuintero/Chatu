import { SendMessage } from '../../components/SendMessage/SendMessage'
import { ChatMessages } from '../../components/ChatMessages/ChatMessages'
import { useContext, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'
import { useNavigate } from 'react-router'

function Chat() {
  const { connectSocket } = useContext(MyContext)
  const navigate = useNavigate()

  const handleBackButton = (event) => {
    if (window.innerWidth < 800) {
      connectSocket.setGoToChat(false)
      navigate('/active-chats')
    }
  }

  useEffect(() => {
    window.addEventListener('popstate', handleBackButton)

    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [])

  return (
    <div className='bg-gradient-to-r from-white to-green-500 w-full h-[100vh] relative flex flex-col justify-center items-center'>
      <div className='flex flex-col w-full pl-3 gap-3 h-[98vh]  bg-white  lg:rounded-tl-[100px] rounded-3xl overflow-auto  lg:rounded-br-[100px]  shadow-green-950 shadow-xl  justify-end text-[#37E23B]'>
        <ChatMessages />
        <SendMessage />
      </div>
    </div>
  )
}

export { Chat }
