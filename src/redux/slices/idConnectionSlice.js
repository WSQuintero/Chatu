import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const idConnectionSlice = createSlice({
  name: 'idConnection',
  initialState,
  reducers: {
    updateIdConnection: (state, action) => action.payload,
    resetIdConnection: (state, action) => initialState
  }
})

export const { updateIdConnection, resetIdConnection } =
  idConnectionSlice.actions
export default idConnectionSlice.reducer
