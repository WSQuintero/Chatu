import { useSelector } from 'react-redux'
import { FormSearchFriend } from '../FormSearchFriend/FormSearchFriend'
import { FoundFriend } from '../FoundFriend/FoundFriend'

function ModalSearchFriend() {
  const newFriend = useSelector((state) => state.newFriend)
  const isFriendSearchModalOpen = useSelector(
    (state) => state.isFriendSearchModalOpen
  )

  return (
    <>
      {isFriendSearchModalOpen && (
        <section className='w-full h-full absolute bg-white '>
          <FormSearchFriend />
          <FoundFriend newFriend={newFriend} />
        </section>
      )}
    </>
  )
}

export { ModalSearchFriend }
