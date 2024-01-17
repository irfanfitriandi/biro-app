import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setAuthToken } from '../../app/auth.slice'

const ButtonLogOut = () => {
  const [, , removeCookie] = useCookies(['token', 'id'])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    alert('You`ve Been Logged Out')
    dispatch(setAuthToken(null))
    removeCookie('token')
    removeCookie('id')
    navigate('/login')
  }

  return (
    <button onClick={handleLogOut} type="button">
      Log Out
    </button>
  )
}

export default ButtonLogOut
