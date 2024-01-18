interface IModal {
  children: React.ReactNode
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, showModal, setShowModal }: IModal) => {
  return (
    <>
      <button
        hidden={!showModal}
        onClick={() => setShowModal(!showModal)}
        className="fixed z-20 h-screen w-full bg-gray-500/40"
      />

      <div
        className={`fixed top-36 z-30 max-w-xs justify-center transition-all duration-500 ease-in-out ${!showModal ? 'translate-y-[100vh] opacity-0' : 'block translate-y-0 opacity-100'}`}
      >
        {children}
      </div>
    </>
  )
}

export default Modal
