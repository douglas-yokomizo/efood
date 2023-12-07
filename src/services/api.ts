import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { MenuItem, Purchase, Restaurant } from '../types/api'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantMenu: builder.query<MenuItem[], string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: {cardapio:MenuItem[]}) => response.cardapio
    }),
    getRestaurantData: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    purchase: builder.mutation<any, Purchase>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  }),
})

export const {
  useGetRestaurantMenuQuery,
  useGetRestaurantDataQuery,
  useGetAllRestaurantsQuery,
  usePurchaseMutation
} = api
