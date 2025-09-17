import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertyApiSlice = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllSavedHomes: builder.query({
      query: () => '/api/properties-saved-homes/getall',
    }),
    getSavedHomeById: builder.query({
      query: (id) => `/api/properties-saved-homes/getbyid/${id}`,
    }),
    getAllSavedSearches: builder.query({
      query: () => '/api/properties-saved-searches/getall',
    }),
    getSavedSearchById: builder.query({
      query: (id) => `/api/properties-saved-searches/getbyid/${id}`,
    }),
    getAllYourHomes: builder.query({
      query: () => '/api/properties-your-home/getall',
    }),
    getYourHomeById: builder.query({
      query: (id) => `/api/properties-your-home/getbyid/${id}`,
    }),
    getAllRenterHub: builder.query({
      query: () => '/api/properties-renter-hub/getall',
    }),
    getRenterHubById: builder.query({
      query: (id) => `/api/properties-renter-hub/getbyid/${id}`,
    }),
    getAllRecentlyViewed: builder.query({
      query: () => '/api/properties-recently-viewed/getall',
    }),
    getRecentlyViewedById: builder.query({
      query: (id) => `/api/properties-recently-viewed/getbyid/${id}`,
    }),
    getAllManageTours: builder.query({
      query: () => '/api/properties-manage-tours/getall',
    }),
    getManageTourById: builder.query({
      query: (id) => `/api/properties-manage-tours/getbyid/${id}`,
    }),
    getAllFavoriteProperties: builder.query({
      query: () => '/api/your-favorite-properties/getall',
    }),
    getFavoritePropertyById: builder.query({
      query: (id) => `/api/your-favorite-properties/getbyid/${id}`,
    }),
  }),
});

export const {
  useGetAllSavedHomesQuery,
  useGetSavedHomeByIdQuery,
  useGetAllSavedSearchesQuery,
  useGetSavedSearchByIdQuery,
  useGetAllYourHomesQuery,
  useGetYourHomeByIdQuery,
  useGetAllRenterHubQuery,
  useGetRenterHubByIdQuery,
  useGetAllRecentlyViewedQuery,
  useGetRecentlyViewedByIdQuery,
  useGetAllManageToursQuery,
  useGetManageTourByIdQuery,
  useGetAllFavoritePropertiesQuery,
  useGetFavoritePropertyByIdQuery,
} = propertyApiSlice;