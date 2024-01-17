import { Suspense } from 'react'
import { useCookies } from 'react-cookie'
import { RouterProvider } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import routes from '../src/routes'
import Loading from './components/UI/LoadingSpinner'
import { RootState } from './app/store'
import { setAuthToken } from './app/auth.slice'

const App = () => {
  const [cookie] = useCookies(['token'])

  const authState = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  if (!authState.token) {
    dispatch(setAuthToken(cookie.token ? cookie.token : null))
  }

  return (
    <Suspense fallback={<Loading loadingPage />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
