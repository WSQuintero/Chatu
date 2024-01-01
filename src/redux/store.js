import { configureStore } from '@reduxjs/toolkit'
import userLoggedReducer from './slices/loggedUserSlice'
import selectedFriendReducer from './slices/selectedFriendSlice'
import newUserReducer from './slices/newUserSlice'
import isUserAuthenticatedReducer from './slices/userAtuhenticatedSlice'
import friendSearchModalReducer from './slices/openFriendSearchModalSlice'
import newFriendReducer from './slices/newFriendSlice'
import openChatReducer from './slices/openChatSlice'
import messagesReducer from './slices/messagesSlice'
import idConnectionReducer from './slices/idConnectionSlice'
import backToActChatsReducer from './slices/backToActChatsSlice'

const store = configureStore({
  reducer: {
    loggedUser: userLoggedReducer,
    newUser: newUserReducer,
    isUserAuthenticated: isUserAuthenticatedReducer,
    isFriendSearchModalOpen: friendSearchModalReducer,
    newFriend: newFriendReducer,
    isOpenChat: openChatReducer,
    selectedFriend: selectedFriendReducer,
    messages: messagesReducer,
    idConnection: idConnectionReducer,
    backToActChats: backToActChatsReducer
  }
})

export default store
