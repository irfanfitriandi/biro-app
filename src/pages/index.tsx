import { Link } from 'react-router-dom'

import Button from '../components/UI/Button'
import ButtonLogOut from '../components/UI/Button/ButtonLogOut'
import ButtonProfile from '../components/UI/Button/ButtonProfile'

const HomePage = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[url('/img/img-2.webp')] bg-cover">
        <div className="absolute top-2 flex w-full justify-between px-4">
          <ButtonProfile />
          <ButtonLogOut />
        </div>
        <div className="max-w-xl">
          <div>Embark on Unforgettable Journeys with Tourify!</div>
          <p>
            Welcome to a world of enchanting destinations, captivating cultures,
            and unparalleled adventures. At Tourify, we redefine the way you
            experience travel, making every trip a masterpiece of discovery.
          </p>
          <Link to="/tourist">
            <Button label="Get Started" sources="primary" fit />
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-white"></div>
    </>
  )
}

export default HomePage
