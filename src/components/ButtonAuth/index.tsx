import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import { setAuthToken } from '@/app/reducers/auth.slice'
import { setToast } from '@/app/reducers/toast.slice'
import { RootState } from '@/app/store'
import { Button } from '..'

export const ButtonAuth = () => {
  const [, , removeCookie] = useCookies(['token', 'id'])
  const authState = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogin = !!authState.token

  const handleLogOut = () => {
    dispatch(
      setToast({
        messageToast: `You've been logged out`,
        statusToast: 'success',
        showToast: true,
      }),
    )
    dispatch(setAuthToken(null))
    removeCookie('token')
    removeCookie('id')
    navigate('/')
  }

  return (
    <Button
      label={isLogin ? 'Logout' : 'Login'}
      sources={isLogin ? 'secondary' : 'primary'}
      fit
      onClick={isLogin ? handleLogOut : () => navigate('/login')}
    />
  )
}
