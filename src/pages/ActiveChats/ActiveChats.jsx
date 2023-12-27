import { Main } from '../../components/Main/Main'
import { ProfileImageSelector } from '../../components/ProfileImageSelector/ProfileImageSelector'
import { FriendListContainer } from '../../components/FriendListContainer/FriendListContainer'
import { ModalSearchFriend } from '../../components/ModalSearchFriend/ModalSearchFriend'

function ActiveChats () {
  return (
    <Main>
      <ProfileImageSelector />
      <FriendListContainer/>
      <ModalSearchFriend/>
    </Main>
  )
}

export { ActiveChats }
