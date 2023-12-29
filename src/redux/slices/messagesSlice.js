import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const messagesSLice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    updateMessages: (state, action) => action.payload,
    resetMessages: () => initialState
  }
})

export const { updateMessages, resetMessages } = messagesSLice.actions
export default messagesSLice.reducer
