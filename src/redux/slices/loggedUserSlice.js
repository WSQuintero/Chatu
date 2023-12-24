import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(sessionStorage.getItem('currentUser')) || {
  name: null,
  email: null,
  friends: [],
  uid: [],
  idConnection: null,
  perfilPhoto: null,
  isUserAuthenticated: false
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
        isUserAuthenticated
      } = action.payload

      state.name = name
      state.email = email
      state.friends = friends
      state.uid = uid
      state.idConnection = idConnection
      state.perfilPhoto = perfilPhoto
      state.isUserAuthenticated = isUserAuthenticated
    },
    resetLoggedUser: (state, action) => initialState
  }
})

export const { updateUserLogged, resetLoggedUser } = loggedUserSlice.actions
export default loggedUserSlice.reducer
