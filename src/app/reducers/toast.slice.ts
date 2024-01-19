import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IToast } from '../../components/Toast'

interface PayloadToast {
  showToast: boolean
  statusToast: 'success' | 'failed'
  messageToast: string
}

const initialState: IToast = {
  toast: {
    showToast: false,
    messageToast: '',
    statusToast: 'success' as 'success' | 'failed',
  },
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<PayloadToast>) => {
      state.toast = action.payload
    },
  },
})

export const { setToast } = toastSlice.actions

export default toastSlice.reducer
