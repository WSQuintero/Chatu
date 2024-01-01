import { Main } from '../../components/Main/Main'
import { ProfileImageSelector } from '../../components/ProfileImageSelector/ProfileImageSelector'
import { FriendListContainer } from '../../components/FriendListContainer/FriendListContainer'
import { ModalSearchFriend } from '../../components/ModalSearchFriend/ModalSearchFriend'
import { useContext, useEffect } from 'react'
import { setSelectedFriendSs } from '../../helpers/setSelectedFriendSs'
import { resetSelectedFriend } from '../../redux/slices/selectedFriendSlice'
import { useDispatch } from 'react-redux'
import { openModalChat } from '../../redux/slices/openChatSlice'
import { MyContext } from '../../context/MyContext'

function ActiveChats() {
  const dispatch = useDispatch()
  const { connectSocket } = useContext(MyContext)

  useEffect(() => {
    setSelectedFriendSs('')
    dispatch(resetSelectedFriend())
    dispatch(openModalChat(false))
    connectSocket.setGoToChat(false)
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
