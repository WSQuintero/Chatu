import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const backToActChatsSlice = createSlice({
  name: 'backToActChats',
  initialState,
  reducers: {
    updateBackToActChatsSlice: (state, action) => action.payload
  }
})

export const { updateBackToActChatsSlice } = backToActChatsSlice.actions
export default backToActChatsSlice.reducer
