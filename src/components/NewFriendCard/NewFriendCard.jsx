import { useSelector } from 'react-redux'

function NewFriendCard({ handleAddListOfFriends, addNewFriend, sameUser }) {
  const newFriend = useSelector((state) => state.newFriend)
  return (
    <>
      {newFriend.email && !sameUser && (
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
                <h3 className='text-[#19581a]'>{newFriend.name}</h3>
                <p className='text-[#257726]'> {newFriend.email}</p>
              </div>
            </div>
            <button
              className='w-[78px] h-[80px] bg-[#8ee68f] p-4 rounded-full grid place-content-center font-medium '
              onClick={handleAddListOfFriends}>
              Añadir
            </button>
          </article>
          <div className='flex flex-col justify-center items-center'>
            {addNewFriend.isOkayUpdate && (
              <p className='text-blue-600 mt-10 font-bold text-lg'>
                {' '}
                Has añadido a {newFriend?.name} a tus amigos{' '}
              </p>
            )}
            {addNewFriend.friendExist && (
              <p className='text-red-600 mt-10 font-bold text-lg'>
                {newFriend?.name} ya se encuentra en tus amigos{' '}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export { NewFriendCard }
