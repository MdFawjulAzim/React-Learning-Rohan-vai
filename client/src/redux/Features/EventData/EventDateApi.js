import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const EventDataApi = createApi({
  reducerPath: "EventDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
  }),

  tagTypes: ["EventDataApi"],
  endpoints: (builder) => ({
    getEventData: builder.query({
      query: () => ({
        url: "/event",
      }),
    }),
    getEventDataById: builder.query({
      query: (id) => ({
        url: `/event/${id}`,
        providesTags: (result, error, id) => [{ type: "EventDataApi", id }],
      }),
    }),
  }),
});

export const { useGetEventDataQuery, useGetEventDataByIdQuery } = EventDataApi;

export default EventDataApi;
