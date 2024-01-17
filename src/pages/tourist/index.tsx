import { useEffect, useState } from 'react'

import { useInfiniteScroll } from '../../hooks/use-infinite-scroll'
import { useGetTouristListQuery } from '../../app/services/api'
import { Tourist } from '../../utils/types/tourist'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import CardTourist from '../../components/Card/CardTourist'
import Header from '../../components/Layout/Header'

const TouristList = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [touristList, setTouristList] = useState<Tourist[]>([])
  const { data, isFetching } = useGetTouristListQuery(page)

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

  return (
    <div className="srelative flex flex-col bg-[url('/img/bg-1.webp')] bg-auto">
      <Header isFixed />
      <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 gap-4 bg-[#FFD05B] px-8 py-6 md:grid-cols-2">
        {touristList.map((data) => (
          <CardTourist key={data.createdat} data={data} />
        ))}

        {isFetching && <LoadingSpinner loadingPage={false} />}
      </div>
    </div>
  )
}

export default TouristList
