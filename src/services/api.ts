import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { MenuItem, Restaurant } from '../types/api'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantMenu: builder.query<MenuItem[], string>({
      query: (id) => `/${id}`,
      transformResponse: (response: {cardapio:MenuItem[]}) => response.cardapio
    }),
    getRestaurantData: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    }),
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    })
  }),
})

export const {useGetRestaurantMenuQuery, useGetRestaurantDataQuery, useGetAllRestaurantsQuery} = api
