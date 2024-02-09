import { Link } from 'react-router-dom'
import { Tourist } from '@/utils/types'

interface ICardTourist {
  data: Tourist
}

export const CardTourist = ({ data }: ICardTourist) => {
  return (
    <Link
      to={`/tourist/${data.id}`}
      className="relative max-w-[250px] overflow-clip rounded-2xl bg-white shadow-md shadow-black/10 md:max-w-xs"
    >
      <div>
        <img
          src={data.tourist_profilepicture}
          alt={data.tourist_name + '_img'}
          className="w-full"
        />
      </div>
      <div className="p-4 text-center">
        <h6 className="font-medium">
          {data.tourist_name + ' - ' + data.tourist_location}
        </h6>
        <p className="text-xs lowercase md:text-sm">{data.tourist_email}</p>
      </div>
    </Link>
  )
}
