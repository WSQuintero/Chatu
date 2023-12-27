import { IconContext } from 'react-icons'
import { FaCamera } from 'react-icons/fa'

function ProfileImageSelector () {
  return (
          <figure className='w-[100px] h-[100px]  absolute top-1 bg-white rounded-full object-cover '>
        <div className='w-[100px] h-[100px]  overflow-hidden bg-white rounded-full object-cover'>
          <img
            src={'/img/no-user.jpg'}
            alt='logo'
            className='object-cover w-full h-full'
          />
          <label htmlFor='fileInput' className='cursor-pointer'>
            <input
              type='file'
              id='fileInput'
              name='fileInput'
              accept='image/*'
              className='bg-transparent hidden'
              onChange={() => {}}
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
