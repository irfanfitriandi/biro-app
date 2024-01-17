import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  sources: 'primary' | 'secondary'
  fit?: boolean
}

const Button = ({ label, sources, fit, ...props }: IButton) => {
  return (
    <button
      className={`${sources === 'primary' ? 'bg-[#FFD05B] hover:bg-yellow-500' : 'bg-[#54C0EB] hover:bg-sky-500'} ${fit ? 'w-fit' : 'w-full'} rounded-full px-4 py-2 font-medium text-white disabled:bg-gray-200`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
