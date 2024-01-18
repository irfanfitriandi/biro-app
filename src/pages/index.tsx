import { Link } from 'react-router-dom'

import Button from '../components/UI/Button'
import Header from '../components/Layout/Header'

const HomePage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center overflow-clip bg-[url('/img/img-2.webp')] bg-cover">
      <Header isFixed={false} />
      <div className="mt-56 max-w-xl px-6 md:mt-80">
        <div className="text-2xl font-semibold md:text-4xl">
          Embark on Unforgettable Journeys with Tourify!
        </div>
        <p className="rounded-md text-sm text-black md:text-base">
          At Tourify, we redefine the way you experience travel, making every
          trip a masterpiece of discovery.
        </p>
        <div className="mt-6 flex w-full justify-center">
          <Link to="/tourist">
            <Button label="Get Started" sources="primary" fit />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
