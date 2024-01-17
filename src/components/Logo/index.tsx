import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <img src="/biro-icon.svg" alt="icon" width={50} />
    </Link>
  )
}

export default Logo
