import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { MyContext } from '../../context/MyContext'

function FoundFriend ({ newFriend }) {
  const loggedUser = useSelector((state) => state.loggedUser)
  const sessionUser = JSON.parse(sessionStorage.getItem('loggedUser'))
  const { findUserId } = useContext(MyContext)

  const handleAddListOfFriends = () => {
    findUserId(loggedUser.email || sessionUser.email)
  }

  return (
    <>
      {newFriend.email
        ? (
            newFriend.email !== loggedUser.email
              ? (
          <div className='w-full p-5'>
            <article className='flex flex-col sm:flex-row justify-between  border border-[#37E23B] p-4 items-center'>
              <div className='flex gap-3'>
                <img
                  src={
                    newFriend?.perfilPhoto
                      ? newFriend?.perfilPhoto
                      : '/img/no-user.jpg'
                  }
                  alt={newFriend.name}
                  className='w-[60px] h-[60px] rounded-full border-4 border-[#37E23B'
                />
                <div>
                  <h3 className='text-[#19581a]'>
                    {newFriend.name}
                  </h3>
                  <p className='text-[#257726]'>
                    {newFriend.email}
                  </p>
                </div>
              </div>
              <button
                className='w-[78px] h-[80px] bg-[#8ee68f] p-4 rounded-full grid place-content-center font-medium '
                onClick={handleAddListOfFriends}>
                Añadir
              </button>
            </article>

            {/* <div className='flex flex-col justify-center items-center'>
              {isOkayUpdate && (
                <p className='text-blue-600 mt-10 font-bold text-lg'>
                  Has añadido a {newFriend?.name} a tus amigos{' '}
                </p>
              )}
              {friendExist && (
                <p className='text-red-600 mt-10 font-bold text-lg'>
                  {newFriend?.name} ya se encuentra en tus amigos{' '}
                </p>
              )}
            </div> */}
          </div>
                )
              : (
          <p className='w-full h-[50%] grid place-content-center text-2xl font-bold text-green-600'>
            Es tu mismo usuario
          </p>
                )
          )
        : (
        <p className='w-full h-[50%] grid place-content-center text-2xl font-bold text-green-600'>
          No se encontró usuario
        </p>
          )
          }
    </>
  )
}

export { FoundFriend }
