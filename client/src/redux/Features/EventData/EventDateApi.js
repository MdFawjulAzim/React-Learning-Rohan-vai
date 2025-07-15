import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../../baseUrl/baseUrl";

const EventDateApi = createApi({
  reducerPath: "EventDateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
    credentials: "include",
  }),
  tagTypes: ["EventDataApi"],
  endpoints: (builder) => ({
    getEventDate: builder.query({
      query: () => ({
        url: "/event",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetEventDateQuery } = EventDateApi;

export default EventDateApi;