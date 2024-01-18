export interface Tourist {
  $id: string
  createdat: string
  id: string
  tourist_email: string
  tourist_profilepicture: string
  tourist_location: string
  tourist_name: string
  token?: string
}
export interface TouristListRes {
  page: string
  per_page: number
  totalrecord: number
  total_pages: number
  data: Tourist[]
}

export interface TouristForm {
  tourist_email: string
  tourist_location: string
  tourist_name: string
}
