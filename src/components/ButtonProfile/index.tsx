import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const ButtonProfile = () => {
  const [cookie] = useCookies(['id'])

  return (
    <Link to={`/profile/${cookie.id}`}>
      <button className="flex items-center gap-2 rounded-full bg-black/20 px-5 py-2">
        <img src="/ic/profile.svg" alt="profile" width={26} />
        <div className="font-semibold">Hallo</div>
      </button>
    </Link>
  )
}

export default ButtonProfile
