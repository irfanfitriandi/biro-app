import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const ButtonProfile = () => {
  const [cookie] = useCookies(['id'])

  return (
    <Link to={`/profile/${cookie.id}`}>
      <button>Profile</button>
    </Link>
  )
}

export default ButtonProfile
