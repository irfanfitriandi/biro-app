import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  sources: 'primary' | 'secondary'
}

const Button = ({ label, sources, ...props }: IButton) => {
  return (
    <button
      className={`${sources === 'primary' ? 'bg-[#FFD05B] hover:bg-yellow-400' : 'bg-[#54C0EB] hover:bg-sky-400'} w-full rounded-full py-2 font-medium text-white`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
