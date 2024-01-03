import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { MyContext } from '../../context/MyContext'
import { IconContext } from 'react-icons'
import { IoIosCloseCircle } from 'react-icons/io'
import { closeFriendSearchModal } from '../../redux/slices/openFriendSearchModalSlice'
import { FaSearch } from 'react-icons/fa'

function FormSearchFriend() {
  const { getFriend } = useContext(MyContext)
  const dispatch = useDispatch()

  const handleSearchFriend = (event) => {
    event.preventDefault()
    const emailNewFriend = event.target.elements.searchUserByEmail.value
    getFriend.searchNewFriend.searchUserByEmail(emailNewFriend)
  }

  return (
    <form
      className='flex flex-col items-center justify-center mt-5'
      onSubmit={handleSearchFriend}
      id='handleSearchFriend'
      htmlFor='searchUserByEmail'>
      <button onClick={() => dispatch(closeFriendSearchModal())}>
        <IconContext.Provider
          value={{
            color: 'green',
            className: 'w-[50px] h-[50px] absolute right-5 '
          }}>
          <IoIosCloseCircle />
        </IconContext.Provider>
      </button>
      <div className='h-[50PX] w-[80%] flex items-center justify-center bg-lightestGreen'>
        <label
          className='relative h-full flex items-center p-3 text-green'
          htmlFor='searchUserByEmail'>
          <IconContext.Provider value={{ color: '#37E23B', size: '80%' }}>
            <FaSearch />
          </IconContext.Provider>
        </label>
        <input
          className=' bg-transparent placeholder:text-green h-full outline-none text-darkGreen font-md  w-full'
          type='email'
          placeholder='Buscar usuario por email'
          name='searchUserByEmail'
          id='searchUserByEmail'
        />
      </div>
      <button className='bg-green px-5 py-2 rounded-2xl mt-4 text-white font-bold hover:bg-lightestGreen hover:text-green hover:border hover:border-green'>
        Buscar
      </button>
    </form>
  )
}

export { FormSearchFriend }
