import { InputHTMLAttributes } from 'react'

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputForm = ({ label, ...props }: IInputForm) => {
  return (
    <div className="space-y-1">
      <label className="text-lg font-medium">{label}</label>
      <input
        className="bg-form w-full rounded-lg border px-3 py-2 text-black focus:outline-none"
        {...props}
      />
    </div>
  )
}
