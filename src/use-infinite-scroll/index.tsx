import { useEffect } from 'react'

interface IInfiniteScrollHooks {
  totalPages: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  isFetching: boolean
}

export function useInfiniteScroll({
  totalPages,
  page,
  setPage,
  isFetching,
}: IInfiniteScrollHooks) {
  useEffect(() => {
    const onScroll = () => {
      if (page >= totalPages) return

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (scrolledToBottom && !isFetching) {
        setPage((prevPage) => prevPage + 1)
      }
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [totalPages, isFetching, setPage, page])
}
