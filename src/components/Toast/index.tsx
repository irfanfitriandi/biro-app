import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from '../../app/reducers/toast.slice'
import { RootState } from '../../app/store'

export interface IToast {
  toast: {
    showToast: boolean
    statusToast: 'success' | 'failed'
    messageToast: string
  }
}

const Toast = ({ toast }: IToast) => {
  const dispatch = useDispatch()
  const toastState = useSelector((state: RootState) => state.toast)

  useEffect(() => {
    if (toast.showToast) {
      setTimeout(() => {
        dispatch(setToast({ ...toastState.toast, showToast: false }))
      }, 3000)
    }
  }, [toast.showToast, dispatch, toastState.toast])

  return (
    <button
      onClick={() =>
        dispatch(setToast({ ...toastState.toast, showToast: false }))
      }
      className={`${toast.showToast ? 'translate-x-0' : 'translate-x-[150%]'} ${toast.statusToast === 'success' ? 'bg-[#54C0EB]' : 'bg-[#FF7058] '} fixed bottom-36 right-4 w-fit cursor-pointer whitespace-nowrap rounded-md bg-[#54C0EB] py-2 pl-4 pr-10 text-start text-white transition-transform duration-500 ease-in-out`}
    >
      <div className="fp font-medium capitalize">{toast.statusToast}</div>
      <span className="text-sm">{toast.messageToast}</span>
    </button>
  )
}

export default Toast
