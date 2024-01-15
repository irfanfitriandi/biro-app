import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/store'

interface IPrivateRoutes {
  Component: () => JSX.Element
}

const PrivateRoutes = ({ Component }: IPrivateRoutes) => {
  const authState = useSelector((state: RootState) => state.auth)

  return !authState.token ? <Navigate to="/login" /> : <Component />
}

export default PrivateRoutes
