import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  friends: [],
  uid: [],
  idConnection: '',
  perfilPhoto: '',
  isUserAuthenticated: false
}

const newUserSlice = createSlice({
  name: 'newUser',
  initialState,
  reducers: {
    updateNewUser: (state, action) => {
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
    resetNewUser: (state, action) => initialState
  }
})

export const { updateNewUser, resetNewUser } = newUserSlice.actions
export default newUserSlice.reducer
