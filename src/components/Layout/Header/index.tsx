import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

import ButtonProfile from '../../ButtonProfile'
import ButtonAuth from '../../ButtonAuth'
import Logo from '../../Logo'

interface IHeader {
  isFixed: boolean
}

const Header = ({ isFixed }: IHeader) => {
  const authState = useSelector((state: RootState) => state.auth)
  const isLogin = !!authState.token

  return (
    <header
      className={`${isFixed ? 'fixed h-20 bg-white' : 'absolute top-4'} z-10 flex w-full px-4 ${isLogin ? 'justify-between' : 'justify-end'} items-center`}
    >
      {isLogin && <ButtonProfile />}

      {isFixed && <Logo />}

      <ButtonAuth />
    </header>
  )
}

export default Header
