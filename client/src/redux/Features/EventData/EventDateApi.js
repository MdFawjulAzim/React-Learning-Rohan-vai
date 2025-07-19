import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../baseUrl/baseUrl.js";

const EventDataApi = createApi({
  reducerPath: "EventDataApi",
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
  tagTypes: ["EventData"],
  endpoints: (builder) => ({
    getEventData: builder.query({
      query: () => "/event",
      providesTags: ["EventData"],
    }),
    getEventDataById: builder.query({
      query: (id) => `/event/${id}`,
      providesTags: (result, error, id) => [{ type: "EventData", id }],
    }),
    getAllEventsForOrganizer: builder.query({
      query: () => "/events",
      providesTags: ["EventData"],
    }),
  }),
});

export const {
  useGetEventDataQuery,
  useGetEventDataByIdQuery,
  useGetAllEventsForOrganizerQuery,
} = EventDataApi;

export default EventDataApi;
