import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const TicketApi = createApi({
  reducerPath: "TicketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("token");

      try {
        token = JSON.parse(token);
      } catch (e) {
        console.log(e);
        // Fallback if token is already a string
      }

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Ticket"],

  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => ({
        url: "/ticket",
      }),
      providesTags: ["Ticket"],
    }),
  }),
});

export const { useGetAllTicketsQuery } = TicketApi;

export default TicketApi;
