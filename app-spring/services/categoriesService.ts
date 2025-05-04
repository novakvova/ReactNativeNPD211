import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import {ICategoryItem} from "@/interfaces/category";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: createBaseQuery('categories'),
    tagTypes: ['Categories'],

    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], string|null>({
            query: (token) => {
                return {
                    url: '',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),


    })
})

export const { useGetCategoriesQuery } = categoriesApi;