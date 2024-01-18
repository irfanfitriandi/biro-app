import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../store'
import { setAuthToken } from '../auth.slice'
import { API_URL } from '../../utils/constants/biroapi'
import { DataUser } from '../../utils/types/user'
import { Tourist, TouristForm, TouristListRes } from '../../utils/types/tourist'

export const touristApi = createApi({
  reducerPath: 'touristApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Tourist'],
  endpoints: (build) => ({
    //User
    createRegisterUser: build.mutation({
      query: (payload) => {
        return {
          url: 'authaccount/registration',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
    }),
    createLoginUser: build.mutation({
      query: (payload) => {
        return {
          url: 'authaccount/login',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled
          const token = data.data.Token
          const id = data.data.Id

          dispatch(setAuthToken(token))
          document.cookie = `token=${token}`
          document.cookie = `id=${id}`
        } catch (error) {
          dispatch(setAuthToken(null))
        }
      },
    }),
    getLoginUserInfo: build.query<DataUser, string>({
      query: (id) => {
        return {
          url: `users/${id}`,
        }
      },
    }),

    //Tourist
    getTouristList: build.query<TouristListRes, number>({
      query: (page) => {
        return {
          url: 'tourist',
          params: {
            page,
          },
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        if (Number(newItems.page) > 1) {
          currentCache.data.push(...newItems.data)
          return
        }
        return newItems
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ['Tourist'],
    }),
    getTouristDetail: build.query<Tourist, string>({
      query: (id) => {
        return {
          url: `tourist/${id}`,
        }
      },
      providesTags: ['Tourist'],
    }),
    createTourist: build.mutation<Tourist, TouristForm>({
      query: (payload) => {
        return {
          url: 'tourist',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
    }),
  }),
})

export const {
  useCreateLoginUserMutation,
  useCreateRegisterUserMutation,
  useGetLoginUserInfoQuery,
  useGetTouristDetailQuery,
  useGetTouristListQuery,
  useCreateTouristMutation,
} = touristApi
