import { Suspense } from 'react'
import { useCookies } from 'react-cookie'
import { RouterProvider } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import routes from './routes'

import { RootState } from './app/store'
import { setAuthToken } from './app/reducers/auth.slice'

import { LoadingSpinner, Toast } from './components'

const App = () => {
  const [cookie] = useCookies(['token'])

  const authState = useSelector((state: RootState) => state.auth)
  const toastState = useSelector((state: RootState) => state.toast)

  const dispatch = useDispatch()

  if (!authState.token) {
    dispatch(setAuthToken(cookie.token ? cookie.token : null))
  }

  return (
    <Suspense fallback={<LoadingSpinner loadingPage />}>
      <RouterProvider router={routes} />
      <Toast toast={toastState.toast} />
    </Suspense>
  )
}

export default App
