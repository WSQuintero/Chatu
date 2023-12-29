import { configureStore } from '@reduxjs/toolkit'
import userLoggedReducer from './slices/loggedUserSlice'
import newUserReducer from './slices/newUserSlice'
import isUserAuthenticatedReducer from './slices/userAtuhenticatedSlice'
import friendSearchModalReducer from './slices/openFriendSearchModalSlice'
import newFriendReducer from './slices/newFriendSlice'
import openChatReducer from './slices/openChatSlice'

const store = configureStore({
  reducer: {
    loggedUser: userLoggedReducer,
    newUser: newUserReducer,
    isUserAuthenticated: isUserAuthenticatedReducer,
    isFriendSearchModalOpen: friendSearchModalReducer,
    newFriend: newFriendReducer,
    isOpenChat: openChatReducer,
  }
})

export default store
