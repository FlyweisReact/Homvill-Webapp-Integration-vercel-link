import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const legalApiSlice = createApi({
  reducerPath: 'legalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllTermsConditions: builder.query({
      query: () => '/api/terms-condition/getall',
    }),
    getAllPrivacyPolicies: builder.query({
      query: () => '/api/privacy-policy/getall',
    }),
    getAllFAQs: builder.query({
      query: () => '/api/faq/getall',
    }),
  }),
});

export const {
  useGetAllTermsConditionsQuery,
  useGetAllPrivacyPoliciesQuery,
  useGetAllFAQsQuery,
} = legalApiSlice;