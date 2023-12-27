import { FaSearch } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
// import { FoundFriend } from '../FoundFriend/FoundFriend'
import { useDispatch, useSelector } from 'react-redux'
import { closeFriendSearchModal } from '../../redux/slices/openFriendSearchModalSlice'
import { useContext, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'

function ModalSearchFriend () {
  const newFriend = useSelector((state) => state.newFriend)
  const friendSearchModalSlice = useSelector((state) => state.friendSearchModalSlice)
  const { searchNewFriend } = useContext(MyContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (newFriend.email) {
      console.log(newFriend)
    }
  }, [newFriend])

  const handleSearchFriend = (event) => {
    event.preventDefault()
    const emailNewFriend = event.target.elements.searchUserByEmail.value
    searchNewFriend.searchUserByEmail(emailNewFriend)
  }

  return (
    <>
      {friendSearchModalSlice && (
        <section className='w-full h-full absolute bg-white '>
          <form
            onSubmit={handleSearchFriend}
            className='flex flex-col items-center justify-center mt-5'
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
            <div className='h-[50PX] w-[80%] flex items-center justify-center bg-[#D7FFD7]'>
              <label
                className='relative h-full flex items-center p-3 text-[#37E23B]'
                htmlFor='searchUserByEmail'>
                <IconContext.Provider value={{ color: '#37E23B', size: '80%' }}>
                  <FaSearch />
                </IconContext.Provider>
              </label>
              <input
                type='email'
                placeholder='Buscar usuario por email'
                className=' bg-transparent placeholder:text-[#37E23B] h-full outline-none text-[#19581a] font-md  w-full'
                name='searchUserByEmail'
                id='searchUserByEmail'
              />
            </div>
            <button className='bg-[#37E23B] px-5 py-2 rounded-2xl mt-4 text-white font-bold hover:bg-[#D7FFD7] hover:text-[#37E23B] hover:border hover:border-[#37E23B]'>
              Buscar
            </button>
          </form>
          {/* <FoundFriend userFound={userFound} /> */}
        </section>
      )}
    </>
  )
}

export { ModalSearchFriend }
