import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentPreferencesApiSlice = createApi({
    reducerPath: 'documentPreferencesApi',
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
        getAllDocumentPreferences: builder.query({
            query: ({ page = 1, limit = 10 }) => `/api/document-preferences/getall?page=${page}&limit=${limit}`,
        }),
        getDocumentPreferencesById: builder.query({
            query: (id) => `/api/document-preferences/getbyid/${id}`,
        }),
        updateDocumentPreferences: builder.mutation({
            query: (body) => ({
                url: '/api/document-preferences/update',
                method: 'PUT',
                body,
            }),
        }),
    }),
});

export const {
    useGetAllDocumentPreferencesQuery,
    useGetDocumentPreferencesByIdQuery,
    useUpdateDocumentPreferencesMutation,
} = documentPreferencesApiSlice;