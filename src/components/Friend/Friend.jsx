import { useContext, useEffect, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { IconContext } from 'react-icons/lib'
import { MyContext } from '../../context/MyContext'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { openModalChat } from '../../redux/slices/openChatSlice'
import { updateBackToActChats } from '../../redux/slices/backToActChatsSlice'

function Friend({ friend }) {
  const [openDeleteFriendButton, setOpenDeleteFriendButton] = useState(false)
  const { deleteFriend, connectSocket } = useContext(MyContext)
  const backToActChats = useSelector((state) => state.backToActChats)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    connectSocket.setGoToChat(false)

    if (connectSocket.goToChat) {
      navigate('/chat')
    } else {
      if (window.innerWidth < 800) {
        navigate('/active-chats')
      }
    }
  }, [connectSocket.goToChat, backToActChats])

  return (
    <article
      key={friend.uid}
      className='h-[50px] flex border border-[#37E23B] text-xs items-center px-5 gap-5 justify-between hover:bg-[#D7FFD7] cursor-pointer'
      onClick={() => {
        connectSocket.createIdConnection(friend.email)
      }}
      data-email={friend.email}>
      <img
        src={friend?.perfilPhoto || '/img/no-user.jpg'}
        alt='user image'
        className='h-[90%] object-cover rounded-full'
      />
      <div className='overflow-hidden'>
        <h3 className='font-bold text-md'>{friend.name}</h3>
        <p className='overflow-hidden whitespace-nowrap w-full'>
          {friend.message}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        {openDeleteFriendButton && (
          <button
            onClick={(event) => {
              event.stopPropagation()
              deleteFriend.handleDeleteFriend(friend.email)
              dispatch(openModalChat(false))
            }}
            className='border p-1 border-green-500 hover:bg-red-500 hover:text-white rounded-md'>
            Eliminar
          </button>
        )}
        <IconContext.Provider
          value={{
            color: 'green',
            size: '25px',
            className: 'cursor-pointer'
          }}>
          <CiMenuKebab
            onClick={(event) => {
              event.stopPropagation()
              setOpenDeleteFriendButton(!openDeleteFriendButton)
            }}
          />
        </IconContext.Provider>
      </div>
    </article>
  )
}

export { Friend }
