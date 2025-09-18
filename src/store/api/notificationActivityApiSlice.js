import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationActivityApiSlice = createApi({
    reducerPath: 'notificationActivityApi',
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
        getAllNotificationActivities: builder.query({
            query: ({ page = 1, limit = 10 }) => `/api/notification-activity/getall?page=${page}&limit=${limit}`,
        }),
        getNotificationActivityById: builder.query({
            query: (id) => `/api/notification-activity/getbyid/${id}`,
        }),
        updateNotificationActivity: builder.mutation({
            query: (body) => ({
                url: '/api/notification-activity/update',
                method: 'PUT',
                body,
            }),
        }),
        updateAllNotificationActivities: builder.mutation({
            query: (body) => ({
                url: '/api/notification-activity/updateall',
                method: 'PUT',
                body,
            }),
        }),
    }),
});

export const {
    useGetAllNotificationActivitiesQuery,
    useGetNotificationActivityByIdQuery,
    useUpdateNotificationActivityMutation,
    useUpdateAllNotificationActivitiesMutation,
} = notificationActivityApiSlice;