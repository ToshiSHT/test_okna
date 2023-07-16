'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const menuAPI = createApi({
    reducerPath: 'menuAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        fetchMenu: builder.query({
            query: () => 'menu.json',
        }),
    }),
});

export const { useFetchMenuQuery } = menuAPI;
export const menuAPIReducer = menuAPI.reducer;
