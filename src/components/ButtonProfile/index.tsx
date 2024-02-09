import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export const ButtonProfile = () => {
  const [cookie] = useCookies(['id'])

  return (
    <Link to={`/profile/${cookie.id}`}>
      <button className="flex items-center gap-2 rounded-full bg-black/20 px-5 py-2">
        <img src="/ic/profile.svg" alt="profile" width={26} />
        <div className="fp font-semibold">Hi there!</div>
      </button>
    </Link>
  )
}
