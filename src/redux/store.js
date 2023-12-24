import { configureStore } from '@reduxjs/toolkit'
import userLoggedReducer from './slices/loggedUserSlice'
import newUserReducer from './slices/newUserSlice'

const store = configureStore({
  reducer: {
    loggedUser: userLoggedReducer,
    newUser: newUserReducer
  }
})

export default store
