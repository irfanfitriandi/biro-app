import React, { useEffect, useState } from 'react'

import { useInfiniteScroll } from '../../hooks/use-infinite-scroll'
import { useGetTouristListQuery } from '../../app/services/api'
import { Tourist } from '../../utils/types/tourist'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import CardTourist from '../../components/Card/CardTourist'
import Header from '../../components/Layout/Header'
import CardForm from '../../components/Card/CardForm'
import InputForm from '../../components/UI/Input/InputForm'
import Button from '../../components/UI/Button'

const TouristList = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [modalAddTourist, setModalAddTourist] = useState(false)
  const [touristList, setTouristList] = useState<Tourist[]>([])
  const { data, isFetching } = useGetTouristListQuery(page)

  const [formTourist, setFormTourist] = useState({
    tourist_email: '',
    tourist_location: '',
    tourist_name: '',
  })

  useEffect(() => {
    if (data) {
      setTouristList(data.data)
      setTotalPages(data.total_pages)
    }
  }, [data])

  useInfiniteScroll({
    isFetching,
    totalPages,
    page,
    setPage,
  })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormTourist({
      ...formTourist,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="relative flex flex-col items-center bg-[url('/img/bg-1.webp')] bg-auto">
      <Header isFixed />
      <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 gap-4 bg-[#FFD05B] px-8 py-6 md:grid-cols-2">
        {touristList.map((data) => (
          <CardTourist key={data.id} data={data} />
        ))}

        {isFetching && <LoadingSpinner loadingPage={false} />}
      </div>

      {/* Add Tourist */}
      <button
        onClick={() => setModalAddTourist(!modalAddTourist)}
        className="fixed bottom-4 right-4 z-10 rounded-full bg-[#f4f2ed] p-2 shadow-md shadow-black/30"
      >
        <img src="/ic/add-user.svg" alt="add-user" className="my-1 ml-2 w-12" />
      </button>

      <button
        hidden={!modalAddTourist}
        onClick={() => setModalAddTourist(!modalAddTourist)}
        className="fixed z-20 h-full w-full bg-gray-500/40"
      />

      <div
        className={`fixed top-36 z-30 max-w-xs justify-center transition-all duration-300 ease-in-out ${!modalAddTourist ? 'translate-y-32 opacity-0' : 'block translate-y-0 opacity-100'}`}
      >
        <CardForm title="Add Tourist" handleSubmit={handleSubmit}>
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
              <Button label="Add Tourist" sources="primary" type="submit" />
            </div>
          </>
        </CardForm>
      </div>
    </div>
  )
}

export default TouristList
