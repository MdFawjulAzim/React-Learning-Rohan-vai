import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const TicketApi = createApi({
  reducerPath: "TicketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
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
