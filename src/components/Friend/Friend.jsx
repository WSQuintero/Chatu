import { useContext, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { IconContext } from 'react-icons/lib'
import { MyContext } from '../../context/MyContext'

function Friend({ friend }) {
  const [openDeleteFriendButton, setOpenDeleteFriendButton] = useState(false)
  const { deleteFriend } = useContext(MyContext)

  return (
    <article
      key={friend.uid}
      className='h-[50px] flex border border-[#37E23B] text-xs items-center px-5 gap-5 justify-between hover:bg-[#D7FFD7] cursor-pointer'
      onClick={() => {}}
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
            onClick={() => deleteFriend.handleDeleteFriend(friend.email)}
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
            onClick={() => setOpenDeleteFriendButton(!openDeleteFriendButton)}
          />
        </IconContext.Provider>
      </div>
    </article>
  )
}

export { Friend }
