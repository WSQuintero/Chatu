import { ProfileImageSelector } from '../../components/ProfileImageSelector/ProfileImageSelector'
import { FriendListContainer } from '../../components/FriendListContainer/FriendListContainer'
import { ModalSearchFriend } from '../../components/ModalSearchFriend/ModalSearchFriend'
import { useContext, useEffect } from 'react'
import { setSelectedFriendSs } from '../../helpers/setSelectedFriendSs'
import { resetSelectedFriend } from '../../redux/slices/selectedFriendSlice'
import { useDispatch } from 'react-redux'
import { openModalChat } from '../../redux/slices/openChatSlice'
import { MyContext } from '../../context/MyContext'
import { Logout } from '../../components/Logout/Logout'
import { useObserveStateAuth } from '../../customHooks/principalHooks/useObserveStateAuth'

function ActiveChats() {
  const dispatch = useDispatch()
  const { connectSocket } = useContext(MyContext)
  useObserveStateAuth()

  useEffect(() => {
    setSelectedFriendSs('')
    dispatch(resetSelectedFriend())
    dispatch(openModalChat(false))
    connectSocket.setGoToChat(false)
  }, [])

  return (
    <section className='bg-gradient-to-r from-white to-green-500 w-full h-[100vh] relative flex flex-col justify-center items-center'>
      <Logout />
      <ProfileImageSelector />
      <FriendListContainer />
      <ModalSearchFriend />
    </section>
  )
}

export { ActiveChats }
