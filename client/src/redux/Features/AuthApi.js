import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./../../baseUrl/baseUrl";

// Optional: Get token from localStorage or Redux (if using JWT auth)
const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl()}/api`,
  credentials: "include", // for sending cookies
  prepareHeaders: (headers) => {
    let token = localStorage.getItem("token");

    try {
      // If token was saved with JSON.stringify
      token = JSON.parse(token);
    } catch (e) {
      console.log(e);
      // If already a string, ignore error
    }

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    console.log("Request headers:", Object.fromEntries(headers.entries()));
    return headers;
  },
});

const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery,
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    // Register
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),

    // Login
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // Logout
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = AuthApi;

export default AuthApi;
