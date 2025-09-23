import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contractorsApiSlice = createApi({
  reducerPath: 'contractorsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL, // Ensure this is set to your base URL (e.g., {{Realestate}})
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Get all contract categories
    getAllContractCategories: builder.query({
      query: () => '/api/contracts-category/getall',
      transformResponse: (response) => response.data, // Extract data field
    }),
    // Get all contractors (used for both "recommended" and "all contractors")
    getAllContractors: builder.query({
      query: () => '/api/contracts-contractor-person/getall',
      transformResponse: (response) => response.data, // Extract data field
    }),
    // Get contractor by ID
    getContractorById: builder.query({
      query: (id) => `/api/contracts-contractor-person/getbyid/${id}`,
      transformResponse: (response) => response.data, // Extract data field
    }),
  }),
});

export const {
  useGetAllContractCategoriesQuery,
  useGetAllContractorsQuery,
  useGetContractorByIdQuery,
} = contractorsApiSlice;