import { Main } from '../../components/Main/Main'
import { ProfileImageSelector } from '../../components/ProfileImageSelector/ProfileImageSelector'
import { FriendListContainer } from '../../components/FriendListContainer/FriendListContainer'

function ActiveChats () {
  return (
    <Main>
      <ProfileImageSelector />
      <FriendListContainer/>
    </Main>
  )
}

export { ActiveChats }
