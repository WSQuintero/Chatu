import { SendMessage } from '../../components/SendMessage/SendMessage'
import { ChatMessages } from '../../components/ChatMessages/ChatMessages'
import { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../../context/MyContext'
import { useLocation, useNavigate } from 'react-router'
import { Main } from '../../components/Main/Main'

function Chat() {
  const { connectSocket } = useContext(MyContext)
  const containerChat = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const handleBackButton = (event) => {
    if (window.innerWidth < 800) {
      connectSocket.setGoToChat(false)
      navigate('/active-chats')
    }
  }

  useEffect(() => {
    containerChat.current.scrollTop = containerChat.current.scrollHeight
    connectSocket.setGoToChat(false)
    window.addEventListener('popstate', handleBackButton)

    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [])

  return (
    <>
      {window.innerWidth < 800 && location.pathname === '/chat' ? (
        <Main ref={containerChat}>
          <div className='flex flex-col w-full gap-3 h-[98vh]  bg-white  lg:rounded-tl-[100px] rounded-3xl overflow-auto   shadow-darkGreen shadow-xl  justify-end text-green'>
            <ChatMessages />
            <SendMessage />
          </div>
        </Main>
      ) : (
        <section
          className=' w-full h-[100vh] relative flex flex-col justify-center items-center'
          ref={containerChat}>
          {' '}
          <div className='flex flex-col w-full gap-3 h-[98vh]  bg-white  lg:rounded-tl-[100px] rounded-3xl overflow-auto   shadow-darkGreen shadow-xl  justify-end text-green'>
            <ChatMessages />
            <SendMessage />
          </div>
        </section>
      )}
    </>
  )
}

export { Chat }
