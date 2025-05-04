import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import {ICategoryItem} from "@/interfaces/category";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: createBaseQuery('categories'),
    tagTypes: ['Categories'],

    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], void>({
            query: () => {
                return {
                    url: '',
                    method: 'GET'
                }
            },
        }),


    })
})

export const { useGetCategoriesQuery } = categoriesApi;