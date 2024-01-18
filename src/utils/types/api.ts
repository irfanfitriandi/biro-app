import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export interface ErrorAPI {
  error: FetchBaseQueryError | SerializedError
}
