import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to="/">
      <img src="/tourist-icon.svg" alt="icon" width={50} />
    </Link>
  )
}
