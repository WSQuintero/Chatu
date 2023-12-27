import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const openFriendSearchModalSlice = createSlice({
  name: 'friendSearchModal',
  initialState,
  reducers: {
    openFriendSearchModal: (state, action) => true,
    closeFriendSearchModal: (state, action) => initialState
  }
})

export const { openFriendSearchModal, closeFriendSearchModal } = openFriendSearchModalSlice.actions
export default openFriendSearchModalSlice.reducer
