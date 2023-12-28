import { useSelector } from 'react-redux'

function SameUser ({ sameUser }) {
  const newFriend = useSelector((state) => state.newFriend)
  return (
    <>
      {newFriend.email && sameUser && (
        <p className='w-full h-[50%] grid place-content-center text-2xl font-bold text-green-600'>
          Es tu mismo usuario
        </p>
      )}
    </>
  )
}

export { SameUser }
