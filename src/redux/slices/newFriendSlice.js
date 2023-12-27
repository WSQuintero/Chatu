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

const newFriendSlice = createSlice({
  name: 'newFriend',
  initialState,
  reducers: {
    updateNewFriend: (state, action) => {
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
    resetNewFriend: (state, action) => initialState
  }
})

export const { updateNewFriend, resetNewFriend } = newFriendSlice.actions
export default newFriendSlice.reducer
