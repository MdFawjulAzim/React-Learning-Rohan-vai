import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./../../baseUrl/baseUrl";

const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      //Get hole query
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),

      loginUser: builder.mutation({
        //Get hole query
        query: (data) => ({
          url: "/login",
          method: "POST",
          body: data,
        }),
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = AuthApi;

export default AuthApi;
