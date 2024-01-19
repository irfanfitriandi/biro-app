import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShowToast } from '../../app/reducers/toast.slice'

export interface IToast {
  isShow: boolean
  status: 'success' | 'failed'
  message: string
}

const Toast = ({ isShow, status, message }: IToast) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        dispatch(setShowToast(false))
      }, 3000)
    }
  }, [isShow, dispatch])

  return (
    <button
      onClick={() => dispatch(setShowToast(false))}
      className={`${isShow ? 'translate-x-0' : 'translate-x-[150%]'} ${status === 'success' ? 'bg-[#54C0EB]' : 'bg-[#FF7058] '} absolute bottom-36 right-4 w-fit cursor-pointer whitespace-nowrap rounded-md bg-[#54C0EB] py-2 pl-4 pr-10 text-start text-white transition-transform duration-500 ease-in-out`}
    >
      <div className="fp font-medium capitalize">{status}</div>
      <span className="text-sm">{message}</span>
    </button>
  )
}

export default Toast
