// redux/features/category/CategoryApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const CategoryDataApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = CategoryDataApi;
export default CategoryDataApi;
