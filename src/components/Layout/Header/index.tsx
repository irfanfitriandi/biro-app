import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

import ButtonProfile from '../../ButtonProfile'
import ButtonAuth from '../../ButtonAuth'
import { Link } from 'react-router-dom'

interface IHeader {
  isFixed: boolean
}

const Header = ({ isFixed }: IHeader) => {
  const authState = useSelector((state: RootState) => state.auth)
  const isLogin = !!authState.token

  return (
    <header
      className={`${isFixed ? 'fixed h-20 bg-white' : 'absolute top-2'} z-10 flex w-full px-4 ${isLogin ? 'justify-between' : 'justify-end'} items-center`}
    >
      {isLogin && <ButtonProfile />}

      {isFixed && (
        <Link to="/">
          <img src="/biro-icon.svg" alt="" width={50} />
        </Link>
      )}

      <ButtonAuth />
    </header>
  )
}

export default Header
