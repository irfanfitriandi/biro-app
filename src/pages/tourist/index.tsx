import { useEffect, useState } from 'react'

import { useInfiniteScroll } from '../../hooks/use-infinite-scroll'
import { useGetTouristListQuery } from '../../app/services/api'
import { Tourist } from '../../utils/types/tourist'

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
    <div className="relative flex flex-col">
      {touristList.map((el) => (
        <div key={el.createdat} className="h-36">
          {el.tourist_name}
        </div>
      ))}

      {isFetching && (
        <div className="absolute top-0 flex h-24 items-center justify-center">
          Asuuuuuuuuuuuuuuuuuuuu
        </div>
      )}
    </div>
  )
}

export default TouristList
