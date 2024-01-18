import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useCreateLoginUserMutation } from '../../../app/services/api'

import CardForm from '../../../components/Card/CardForm'
import InputForm from '../../../components/UI/Input/InputForm'
import Button from '../../../components/UI/Button'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [login] = useCreateLoginUserMutation()

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  useEffect(() => {
    if (email && password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email, password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({
      email,
      password,
    })
      .then((data) => {
        const { error } = data as any
        if (error) {
          alert('Login Failed')
        } else {
          alert('Login Success')
          if (queryParams.get('callback')) {
            navigate(String(queryParams.get('callback')))
          } else {
            navigate('/')
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden h-screen w-1/2 overflow-clip md:block">
        <img
          src="/img/img-1.webp"
          alt="login-img"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 z-10 h-screen w-full bg-black opacity-10"></div>
      </div>

      <div className="flex w-full items-center justify-center bg-[#eeebe3] bg-[url('/img/img-1.webp')] px-8 md:w-1/2 md:bg-[url('')]">
        <CardForm title="Login" handleSubmit={handleSubmit}>
          <>
            <InputForm
              label="Email"
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputForm
              label="Password"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex flex-col gap-2 pt-10">
              <Button
                label="Login"
                sources="primary"
                type="submit"
                disabled={disabled}
              />
              <div className="text-center">Or</div>
              <Link to="/register">
                <Button label="Register" sources="secondary" />
              </Link>
            </div>
          </>
        </CardForm>
      </div>
    </div>
  )
}

export default LoginPage
