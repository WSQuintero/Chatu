import { configureStore } from '@reduxjs/toolkit'
import userLoggedReducer from './slices/loggedUserSlice'
import newUserReducer from './slices/newUserSlice'
import isUserAuthenticatedReducer from './slices/userAtuhenticatedSlice'

const store = configureStore({
  reducer: {
    loggedUser: userLoggedReducer,
    newUser: newUserReducer,
    isUserAuthenticated: isUserAuthenticatedReducer
  }
})

export default store
