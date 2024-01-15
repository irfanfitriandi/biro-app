import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import routes from '../src/routes'
import Loading from './components/UI/Loading'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
