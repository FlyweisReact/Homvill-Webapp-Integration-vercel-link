import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApi',
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
        getUserByAuth: builder.query({
            query: () => '/api/user/getbyauth',
            transformResponse: (response) => response.data, // Extract data field
        }),
        updateUser: builder.mutation({
            query: ({ id, Name, phone }) => ({
                url: '/api/user/update',
                method: 'PUT',
                body: { id, Name, phone },
            }),
        }),
        changePassword: builder.mutation({
            query: ({ currentPassword, newPassword,confirmPassword }) => ({
                url: '/api/user/change-password',
                method: 'PUT',
                body: { currentPassword, newPassword,confirmPassword },
            }),
        }),
        deactivateAccount: builder.mutation({
            query: ({ user_id }) => ({
                url: '/api/user/deactivate',
                method: 'PATCH',
                body: { user_id },
            }),
        }),
    }),
});

export const { 
    useGetUserByAuthQuery, 
    useUpdateUserMutation, 
    useChangePasswordMutation, 
    useDeactivateAccountMutation 
} = userApiSlice;