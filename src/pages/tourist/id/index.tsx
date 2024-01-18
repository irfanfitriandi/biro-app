import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  useDeleteTouristMutation,
  useEditTouristMutation,
  useGetTouristDetailQuery,
} from '../../../app/services/api'

import { Tourist } from '../../../utils/types/tourist'
import { ErrorAPI } from '../../../utils/types/api'

import Logo from '../../../components/Logo'
import Button from '../../../components/UI/Button'
import Modal from '../../../components/Modal'
import CardForm from '../../../components/Card/CardForm'
import InputForm from '../../../components/UI/Input/InputForm'

const TouristDetail = () => {
  const [tourist, setTourist] = useState<Tourist>()
  const [modalEditTourist, setModalEditTourist] = useState(false)
  const [formTourist, setFormTourist] = useState({
    tourist_email: '',
    tourist_location: '',
    tourist_name: '',
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const { data } = useGetTouristDetailQuery(String(id), {
    refetchOnMountOrArgChange: true,
  })
  const [editTourist] = useEditTouristMutation()
  const [deleteTourist] = useDeleteTouristMutation()

  useEffect(() => {
    if (data) {
      setTourist(data)
    }
  }, [data])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormTourist({
      ...formTourist,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editTourist({ payload: formTourist, id: String(id) }).then((res) => {
      const { data } = res as { data: Tourist }
      const { error } = res as ErrorAPI

      if (error) {
        alert('Edit Tourist Failed')
      } else if (data) {
        alert('Edit Tourist Success')
        setTourist(data)
        setModalEditTourist(!modalEditTourist)
      }
    })
  }

  const handleDelete = () => {
    deleteTourist(String(id)).then((res) => {
      const { data } = res as { data: Tourist }
      const { error } = res as ErrorAPI

      if (error) {
        alert('Delete Tourist Failed')
      } else if (data) {
        alert('Delete Tourist Success')
        navigate('/tourist')
      }
    })
  }

  return (
    <div className="relative flex h-screen flex-col items-center overflow-clip bg-[url('/img/bg-1.webp')]">
      <header className="relative flex h-20 w-full items-center bg-white">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 flex items-center gap-1 font-semibold"
        >
          <img src="/ic/left-arrow.svg" alt="arrow" width={12} />
          Back
        </button>
        <div className="mx-auto">
          <Logo />
        </div>
      </header>
      {tourist && (
        <div className="mx-auto flex h-screen w-full max-w-[540px] flex-col items-center gap-6 bg-[#FFD05B] px-8 pt-10">
          <div>
            <img
              src={tourist.tourist_profilepicture}
              alt={tourist.tourist_name + '_img'}
              className="h-48 w-48 rounded-full border-4 border-white shadow-md shadow-black/10"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-3xl bg-white px-3 py-1 font-bold capitalize">
              {tourist.tourist_name + ' - ' + tourist.tourist_location}
            </div>
            <div className="-mt-1 rounded-3xl bg-white px-3 py-1 text-sm font-medium lowercase">
              {tourist.tourist_email}
            </div>
          </div>

          <div className="flex w-full gap-2 px-10">
            <Button
              onClick={() => setModalEditTourist(!modalEditTourist)}
              label="Edit"
              sources="secondary"
              fit={false}
            />
            <Button
              onClick={handleDelete}
              label="Delete"
              sources="danger"
              fit={false}
            />
          </div>
        </div>
      )}

      {/* Modal Edit Tourist */}
      <Modal showModal={modalEditTourist} setShowModal={setModalEditTourist}>
        <CardForm title="Edit Tourist" handleSubmit={handleSubmit}>
          <>
            <InputForm
              label="Name"
              placeholder="Name"
              type="text"
              name="tourist_name"
              value={formTourist.tourist_name}
              onChange={handleChange}
              required
            />
            <InputForm
              label="Location"
              placeholder="Location"
              type="text"
              name="tourist_location"
              value={formTourist.tourist_location}
              onChange={handleChange}
              required
            />
            <InputForm
              label="Email"
              placeholder="Email"
              type="email"
              name="tourist_email"
              value={formTourist.tourist_email}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col gap-2 pt-10">
              <Button label="Edit Tourist" sources="primary" type="submit" />
            </div>
          </>
        </CardForm>
      </Modal>
    </div>
  )
}

export default TouristDetail
