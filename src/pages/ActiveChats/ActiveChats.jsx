import { Main } from '../../components/Main/Main'
import { ProfileImageSelector } from '../../components/ProfileImageSelector/ProfileImageSelector'
import { FriendListContainer } from '../../components/FriendListContainer/FriendListContainer'
import { ModalSearchFriend } from '../../components/ModalSearchFriend/ModalSearchFriend'
import { useEffect } from 'react'
import { setSelectedFriendSs } from '../../helpers/setSelectedFriendSs'
import { resetSelectedFriend } from '../../redux/slices/selectedFriendSlice'
import { useDispatch } from 'react-redux'

function ActiveChats() {
  const dispatch = useDispatch()

  useEffect(() => {
    setSelectedFriendSs('')
    dispatch(resetSelectedFriend())
  }, [])

  return (
    <Main>
      <ProfileImageSelector />
      <FriendListContainer />
      <ModalSearchFriend />
    </Main>
  )
}

export { ActiveChats }
