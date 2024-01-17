import { Link } from 'react-router-dom'

import Button from '../components/UI/Button'
import Header from '../components/Layout/Header'

const HomePage = () => {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center bg-[url('/img/img-2.webp')] bg-cover">
        <Header isFixed={false} />
        <div className="mt-64 max-w-xl space-y-4 px-6 md:mt-96">
          <div className="text-xl font-semibold md:text-2xl">
            Embark on Unforgettable Journeys with Tourify!
          </div>
          <p className="text-sm text-white md:text-base">
            Welcome to a world of enchanting destinations, captivating cultures,
            and unparalleled adventures. At Tourify, we redefine the way you
            experience travel, making every trip a masterpiece of discovery.
          </p>
          <div className="flex w-full justify-center">
            <Link to="/tourist">
              <Button label="Get Started" sources="primary" fit />
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white"></div>
    </>
  )
}

export default HomePage
