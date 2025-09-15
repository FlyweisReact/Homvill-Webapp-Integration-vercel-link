// src/store/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
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
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/user/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(loginStart());
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data.token) {
            dispatch(loginSuccess({
              token: data.data.token,
              user: data.data.user,
            }));
          } else {
            dispatch(loginFailure(data.message || 'Login failed'));
          }
        } catch (error) {
          dispatch(loginFailure(error?.error?.data?.message || 'An error occurred during login'));
        }
      },
    }),
  }),
});

export const { useLoginMutation } = apiSlice;