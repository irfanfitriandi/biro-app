import { configureStore } from '@reduxjs/toolkit'

import { touristApi } from './services/api'
import authReducer from './reducers/auth.slice'
import toastReducer from './reducers/toast.slice'

const store = configureStore({
  reducer: {
    [touristApi.reducerPath]: touristApi.reducer,
    auth: authReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(touristApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
