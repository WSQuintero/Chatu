import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const backToActChatsSlice = createSlice({
  name: 'backToActChats',
  initialState,
  reducers: {
    updateBackToActChats: (state, action) => action.payload
  }
})

export const { updateBackToActChats } = backToActChatsSlice.actions
export default backToActChatsSlice.reducer
