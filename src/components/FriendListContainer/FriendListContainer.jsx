import { IconContext } from 'react-icons'
import { FaSearch } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'

function FriendListContainer () {
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
        placeholder='Buscar por mensaje o usuario'
        className='w-full bg-transparent placeholder:text-[#37E23B] h-full outline-none p-3'
        onChange={(event) => {}}
      />
    </div>
  <button onClick={() => {}}>
    <IconContext.Provider
      value={{
        color: 'green',
        className: 'absolute bottom-0 right-5 w-[70px] h-[70px]'
      }}>
      <IoIosAddCircle />
    </IconContext.Provider>
  </button>
  </div>
  )
}

export { FriendListContainer }
