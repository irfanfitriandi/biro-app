import {
  useCreateLoginUserMutation,
  useGetTouristListQuery,
} from '../app/services/api'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { NavLink } from 'react-router-dom'

const App = () => {
  const [login] = useCreateLoginUserMutation()

  const submitLogin = () => {
    login({
      email: 'badu@gmail.com',
      password: 'hahahihi',
    })
  }

  const { data } = useGetTouristListQuery(1)
  console.log(data)
  const authState = useSelector((state: RootState) => state.auth)
  const cekData = () => {
    console.log(authState)
  }

  return (
    <div className="flex flex-col">
      <button onClick={submitLogin}>login</button>
      <button onClick={cekData}>cek</button>
      <NavLink to={'/tourist'}>tes</NavLink>
    </div>
  )
}

export default App
