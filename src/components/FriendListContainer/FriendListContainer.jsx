import { IconContext } from 'react-icons'
import { FaSearch } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { openFriendSearchModal } from '../../redux/slices/openFriendSearchModalSlice'
import { Friend } from '../Friend/Friend'
import { useState } from 'react'

function FriendListContainer() {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser)
  const [filterFriend, setFilterFriend] = useState('')
  const sessionUser = JSON.parse(sessionStorage.getItem('loggedUser'))
  const actualUser = loggedUser.email ? loggedUser : sessionUser
  const filterFriends = actualUser.friends.filter(
    (friend) =>
      friend.name.includes(filterFriend) || friend.email.includes(filterFriend)
  )
  const handleFilterFriend = (event) => {
    setFilterFriend(event.target.value)
  }

  return (
    <div className='flex flex-col w-[97%] p-10 gap-3 h-[99%] mt-20  bg-white lg:rounded-ss-3xl lg:rounded-ee-3xl lg:rounded-tr-[100px] rounded-3xl overflow-auto  lg:rounded-bl-[100px] shadow-green-950 shadow-xl  justify-start text-[#37E23B]'>
      <div className='h-[50PX] flex items-center justify-center bg-[#D7FFD7] p-3'>
        <span className='relative h-full flex items-center'>
          <IconContext.Provider value={{ color: '#37E23B', size: '80%' }}>
            <FaSearch />
          </IconContext.Provider>
        </span>
        <input
          type='text'
          placeholder='Buscar por usuario'
          className='w-full bg-transparent placeholder:text-[#37E23B] h-full outline-none p-3'
          onChange={handleFilterFriend}
        />
      </div>
      <button onClick={() => dispatch(openFriendSearchModal())}>
        <IconContext.Provider
          value={{
            color: 'green',
            className: 'absolute bottom-0 right-5 w-[70px] h-[70px]'
          }}>
          <IoIosAddCircle />
        </IconContext.Provider>
      </button>
      {filterFriend
        ? filterFriends.map((friend) => (
            <Friend friend={friend} key={friend.uid} />
          ))
        : actualUser.friends.map((friend) => (
            <Friend friend={friend} key={friend.uid} />
          ))}
      {filterFriends.length < 1 && <p>No se encontró usuario</p>}
    </div>
  )
}

export { FriendListContainer }
