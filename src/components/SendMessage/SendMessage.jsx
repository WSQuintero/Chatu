import { LuSend } from 'react-icons/lu'
import { IconContext } from 'react-icons/lib'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

function SendMessage() {
  const { sendMessage } = useContext(MyContext)

  return (
    <form
      onSubmit={sendMessage.handleSendMessage}
      className='h-1/12 bg-lightestGreen flex w-full relative border border-lighterGreen'>
      <textarea
        type='text'
        placeholder='Escribe tu mensaje...'
        name='message'
        className='w-full h-full outline-none pl-5 pr-20 overflow-hidden'
      />
      <button className='p-2 bg-darkerGreen rounded-tl-2xl absolute right-0 h-full grid place-content-center'>
        <IconContext.Provider value={{ color: 'white', size: '25px' }}>
          <LuSend />
        </IconContext.Provider>
      </button>
    </form>
  )
}

export { SendMessage }
