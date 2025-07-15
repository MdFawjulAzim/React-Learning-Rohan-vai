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
  }),
});

export const { useGetEventDataQuery } = EventDataApi;

export default EventDataApi;
