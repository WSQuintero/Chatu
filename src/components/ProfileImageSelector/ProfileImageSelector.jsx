import { useContext } from 'react'
import { IconContext } from 'react-icons'
import { FaCamera } from 'react-icons/fa'
import { MyContext } from '../../context/MyContext'
import { useSelector } from 'react-redux'
import { getUserSs } from '../../helpers/getUserSs'

function ProfileImageSelector() {
  const { updateUserImg } = useContext(MyContext)
  const sessionUser = getUserSs()
  const loggedUser = useSelector((state) => state.loggedUser)

  return (
    <figure className='w-[100px] h-[100px]  absolute top-1 bg-white rounded-full object-cover '>
      <div className='w-[100px] h-[100px]  overflow-hidden bg-white rounded-full object-cover'>
        <img
          src={
            updateUserImg?.imgUrl ||
            sessionUser?.perfilPhoto ||
            loggedUser?.perfilPhoto ||
            '/img/no-user.jpg'
          }
          alt='User image'
          className='object-cover w-full h-full'
        />
        <label htmlFor='fileInput' className='cursor-pointer'>
          <input
            type='file'
            id='fileInput'
            name='fileInput'
            accept='image/*'
            className='bg-transparent hidden'
            onChange={(event) =>
              updateUserImg?.handleUpdateUserImg(event.target.files[0])
            }
          />
          <IconContext.Provider
            value={{
              size: '30px',
              color: 'green',
              className: 'absolute right-0 bottom-0'
            }}>
            <FaCamera />
          </IconContext.Provider>
        </label>
      </div>
    </figure>
  )
}

export { ProfileImageSelector }
