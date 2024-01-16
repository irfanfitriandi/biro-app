interface ICardForm {
  title: string
  children: React.ReactNode
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const CardForm = ({ title, children, handleSubmit }: ICardForm) => {
  return (
    <div className="rounded-3xl bg-[#f4f2ed] py-8 px-6 shadow-md shadow-black/10 space-y-10">
      <h3 className="font text-center text-3xl font-semibold">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">{children}</form>
    </div>
  )
}

export default CardForm
