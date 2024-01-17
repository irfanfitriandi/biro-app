import { useNavigate, useParams } from 'react-router-dom'
import { useGetLoginUserInfoQuery } from '../../app/services/api'

import Logo from '../../components/Logo'
import ButtonAuth from '../../components/ButtonAuth'

const ProfilePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data } = useGetLoginUserInfoQuery(String(id))

  return (
    <div className="h-screen overflow-clip bg-[url('/img/bg-1.webp')]">
      <header className="relative flex h-20 items-center bg-white">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 flex items-center gap-1 font-semibold"
        >
          <img src="/ic/left-arrow.svg" alt="arrow" width={12} />
          Back
        </button>
        <div className="mx-auto">
          <Logo />
        </div>
      </header>
      <div className="mx-auto flex h-screen max-w-xs flex-col items-center gap-6 bg-[#FFD05B] pt-10 md:max-w-xl">
        <div>
          <img
            src={data?.avatar}
            alt={data?.name + '_img'}
            className="h-48 w-48 rounded-full border-4 border-white shadow-md shadow-black/10"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-3xl bg-white px-3 py-1 font-bold capitalize">
            {data?.name}
          </div>
          <div className="-mt-1 rounded-3xl bg-white px-3 py-1 text-sm font-medium lowercase">
            {data?.email}
          </div>
        </div>
        <ButtonAuth />
      </div>
    </div>
  )
}

export default ProfilePage
