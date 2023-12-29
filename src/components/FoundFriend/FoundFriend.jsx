import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { MyContext } from '../../context/MyContext'
import { NewFriendCard } from '../NewFriendCard/NewFriendCard'
import { SameUser } from '../SameUser/SameUser'
import { NotFoundUser } from '../NotFoundUser/NotFoundUser'
import { getUserSs } from '../../helpers/getUserSs'

function FoundFriend({ newFriend }) {
  const loggedUser = useSelector((state) => state.loggedUser)
  const sessionUser = getUserSs()
  const { addNewFriend, getFriend } = useContext(MyContext)
  const sameUser = newFriend.email === (loggedUser.email || sessionUser.email)

  const handleAddListOfFriends = () => {
    addNewFriend.findUserId(loggedUser.email || sessionUser.email)
  }

  return (
    <>
      {!getFriend.friendNoExist ? (
        <>
          <NewFriendCard
            sameUser={sameUser}
            handleAddListOfFriends={handleAddListOfFriends}
            addNewFriend={addNewFriend}
          />
          <SameUser sameUser={sameUser} />
        </>
      ) : (
        <NotFoundUser />
      )}
    </>
  )
}

export { FoundFriend }
