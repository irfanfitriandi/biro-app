import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setAuthToken } from '../../app/auth.slice'
import { RootState } from '../../app/store'

import Button from '../UI/Button'

const ButtonAuth = () => {
  const [, , removeCookie] = useCookies(['token', 'id'])
  const authState = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogin = !!authState.token

  const handleLogOut = () => {
    alert('You`ve Been Logged Out')
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

export default ButtonAuth
