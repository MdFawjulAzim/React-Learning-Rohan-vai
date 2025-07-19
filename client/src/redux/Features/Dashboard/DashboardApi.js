import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const DashboardApi = createApi({
  reducerPath: "DashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("token");

      try {
        token = JSON.parse(token);
      } catch (e) {
        console.log(e);
        // already string
      }

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAdminDashboard: builder.query({
      query: () => ({
        url: "/admin/dashboard",
      }),
    }),
    getUserDashboard: builder.query({
      query: () => ({
        url: "/user/dashboard",
      }),
    }),
  }),
});

export const { useGetAdminDashboardQuery, useGetUserDashboardQuery } =
  DashboardApi;

export default DashboardApi;
