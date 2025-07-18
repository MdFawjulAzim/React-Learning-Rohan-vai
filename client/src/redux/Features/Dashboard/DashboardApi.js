import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const DashboardApi = createApi({
  reducerPath: "DashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAdminDashboard: builder.query({
      query: () => ({
        url: "/admin/dashboard", // Adjust route if needed
      }),
    }),
  }),
});

export const { useGetAdminDashboardQuery } = DashboardApi;
export default DashboardApi;
