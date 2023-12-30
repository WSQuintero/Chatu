import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(sessionStorage.getItem('selectedFriend')) || {
  name: '',
  email: '',
  friends: [],
  uid: [],
  messages: [],
  idConnection: '',
  perfilPhoto: '',
  isUserAuthenticated: false
}

const selectedFriendSlice = createSlice({
  name: 'selectedFriend',
  initialState,
  reducers: {
    updateSelectedFriend: (state, action) => {
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
    resetSelectedFriend: (state, action) => initialState
  }
})

export const { updateSelectedFriend, resetSelectedFriend } =
  selectedFriendSlice.actions
export default selectedFriendSlice.reducer
