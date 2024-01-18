import { HTMLAttributes } from 'react'

interface ICardForm extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const CardForm = ({ title, children, handleSubmit, ...props }: ICardForm) => {
  return (
    <div
      className="space-y-10 rounded-3xl bg-[#f4f2ed] px-6 py-8 shadow-md shadow-black/10"
      {...props}
    >
      <h3 className="font text-center text-3xl font-semibold">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  )
}

export default CardForm
