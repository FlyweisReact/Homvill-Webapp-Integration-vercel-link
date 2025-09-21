// src/redux/api/cartApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/api/cart/getall?page=1&limit=10",
      transformResponse: (response) => response.data, // Extract only data field
    }),
  }),
});

export const { useGetCartQuery } = cartApiSlice;