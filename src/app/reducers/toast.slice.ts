import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showToast: false,
  messageToast: '',
  statusToast: 'success' as 'success' | 'failed',
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setShowToast: (state, action) => {
      state.showToast = action.payload
    },
    setMessageToast: (state, action) => {
      state.messageToast = action.payload
    },
    setStatusToast: (state, action) => {
      state.statusToast = action.payload
    },
  },
})

export const { setShowToast, setMessageToast, setStatusToast } =
  toastSlice.actions

export default toastSlice.reducer
