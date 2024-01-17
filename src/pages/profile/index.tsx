import { useParams } from 'react-router-dom'

import { useGetLoginUserInfoQuery } from '../../app/services/api'

const ProfilePage = () => {
  const { id } = useParams()

  const { data } = useGetLoginUserInfoQuery(String(id))

  return (
    <div>
      ProfilePage
      <div>{data?.name}</div>
    </div>
  )
}

export default ProfilePage
