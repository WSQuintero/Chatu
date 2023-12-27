import { createSlice } from '@reduxjs/toolkit'

const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'))
const initialState = loggedUser?.isUserAuthenticated || false

const userAtuhenticatedSlice = createSlice({
  name: 'userAuthenticated',
  initialState,
  reducers: {
    isUserAuthenticated: (state, action) => {
      return action.payload
    }
  }
})

export const { isUserAuthenticated } = userAtuhenticatedSlice.actions
export default userAtuhenticatedSlice.reducer
