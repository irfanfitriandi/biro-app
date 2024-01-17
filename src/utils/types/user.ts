export interface DataUser {
  id: string
  email: string
  password: string
  name: string
  avatar: string
}

//Login
export interface DataLogin {
  $id: string
  Id: string
  Name: string
  Email: string
  Token: string
}

export interface LoginRes {
  $id: string
  code: number
  message: string
  data: DataLogin
}

//Register
export interface DataRegister {
  id: string
  email: string
  name: string
}

export interface RegisterRes {
  $id: number
  code: number
  message: string
  data: DataRegister
}
