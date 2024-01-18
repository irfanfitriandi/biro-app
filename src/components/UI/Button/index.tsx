import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  sources: 'primary' | 'secondary' | 'danger'
  fit?: boolean
}

const Button = ({ label, sources, fit, ...props }: IButton) => {
  const buttonType = (sources: 'primary' | 'secondary' | 'danger') => {
    switch (sources) {
      case 'primary':
        return 'bg-[#FFD05B] hover:bg-yellow-500'
      case 'secondary':
        return 'bg-[#54C0EB] hover:bg-sky-500'
      case 'danger':
        return 'bg-[#FF7058] hover:bg-rose-500'
    }
  }
  return (
    <button
      className={`${buttonType(sources)} ${fit ? 'w-fit' : 'w-full'} rounded-full border border-black/5 px-4 py-2 font-medium text-white shadow-md shadow-black/20 disabled:bg-gray-200`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
