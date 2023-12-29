import { SendMessage } from '../../components/SendMessage/SendMessage'
import { ChatMessages } from '../../components/ChatMessages/ChatMessages'

function Chat() {
  return (
    <div className='bg-gradient-to-r from-white to-green-500 w-full h-[100vh] relative flex flex-col justify-center items-center'>
      <div className='flex flex-col w-[97%] px-10 gap-3 h-[99%] mt-20  bg-white  lg:rounded-tl-[100px] rounded-3xl overflow-auto  lg:rounded-br-[100px]  shadow-green-950 shadow-xl  justify-end text-[#37E23B]'>
        <ChatMessages />
        <SendMessage />
      </div>
    </div>
  )
}

export { Chat }
