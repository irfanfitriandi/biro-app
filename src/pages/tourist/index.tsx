import { useEffect, useState } from 'react'

import { useInfiniteScroll } from '../../use-infinite-scroll'
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
    <div className="flex flex-col">
      {touristList.map((el, idx) => (
        <div key={idx} className="h-96">
          {el.tourist_name}
        </div>
      ))}
    </div>
  )
}

export default TouristList
