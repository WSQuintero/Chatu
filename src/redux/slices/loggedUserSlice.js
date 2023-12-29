import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(sessionStorage.getItem('loggedUser')) || {
  name: '',
  email: '',
  friends: [],
  uid: [],
  idConnection: '',
  perfilPhoto: '',
  isUserAuthenticated: false,
  messages: []
}

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    updateUserLogged: (state, action) => {
      const {
        name,
        email,
        friends,
        uid,
        idConnection,
        perfilPhoto,
        isUserAuthenticated,
        messages
      } = action.payload

      state.name = name
      state.email = email
      state.friends = friends
      state.uid = uid
      state.idConnection = idConnection
      state.perfilPhoto = perfilPhoto
      state.isUserAuthenticated = isUserAuthenticated
      state.messages = messages
    },
    resetLoggedUser: (state, action) => initialState
  }
})

export const { updateUserLogged, resetLoggedUser } = loggedUserSlice.actions
export default loggedUserSlice.reducer
