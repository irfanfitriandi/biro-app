import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/store'

interface IPrivateRoutes {
  Component: () => JSX.Element
}

const PrivateRoutes = ({ Component }: IPrivateRoutes) => {
  const authState = useSelector((state: RootState) => state.auth)
  const location = useLocation()

  return !authState.token ? (
    <Navigate to={`/login?callback=${location.pathname}`} />
  ) : (
    <Component />
  )
}

export default PrivateRoutes
