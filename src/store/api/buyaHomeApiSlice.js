import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const buyaHomeApiSlice = createApi({
  reducerPath: 'buyaHomeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL, // e.g., {{Realestate}}
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Search properties with filters
    searchProperties: builder.query({
      query: (params) => ({
        url: '/api/search/search-properties',
        params: {
          Properties_Category_id: params.Properties_Category_id || undefined,
          Properties_for: params.Properties_for || undefined,
          Owner_Fist_name: params.Owner_Fist_name || undefined,
          Property_cost: params.Property_cost || undefined,
          Property_city: params.Property_city || undefined,
          Property_state: params.Property_state || undefined,
        },
      }),
      transformResponse: (response) => response.data, // Extract data field
    }),
    // Search by property type
    searchByType: builder.query({
      query: (type) => ({
        url: '/api/search/search-properties',
        params: { Properties_for: type },
      }),
      transformResponse: (response) => response.data,
    }),
    // Search by price range
    searchByPrice: builder.query({
      query: (price) => ({
        url: '/api/search/search-properties',
        params: { Property_cost: price },
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useSearchPropertiesQuery,
  useSearchByTypeQuery,
  useSearchByPriceQuery,
} = buyaHomeApiSlice;