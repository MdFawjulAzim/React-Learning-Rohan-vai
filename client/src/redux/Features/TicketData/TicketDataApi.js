// src/redux/api/tickets/TicketApi.js
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
        // If already a string, do nothing
      }

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Ticket", "UserTickets"],

  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => ({
        url: "/ticket",
      }),
      providesTags: ["Ticket"],
    }),
    getMyTickets: builder.query({
      query: () => ({
        url: "/tickets",
      }),
      providesTags: ["UserTickets"],
    }),
  }),
});

// 🟢 Export hooks here
export const { useGetAllTicketsQuery, useGetMyTicketsQuery } = TicketApi;

export default TicketApi;
