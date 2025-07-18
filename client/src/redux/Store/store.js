import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../Features/AuthApi.js";
import authSlice from "../AuthSlice/AuthSlice.js";
import EventDateApi from "../Features/EventData/EventDateApi.js";
import UserApi from "../Features/UserData/UserDataApi.js";
import TicketApi from "../Features/TicketData/TicketDataApi.js";
import CategoryDataApi from "../Features/CategoryData/CategoryDataApi.js";
import DashboardApi from "../Features/Dashboard/DashboardApi.js";

export const store = configureStore({
  reducer: {
    // reducer call
    Auth: authSlice,
    // api call
    [AuthApi.reducerPath]: AuthApi.reducer,
    [EventDateApi.reducerPath]: EventDateApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [TicketApi.reducerPath]: TicketApi.reducer,
    [CategoryDataApi.reducerPath]: CategoryDataApi.reducer,
    [DashboardApi.reducerPath]: DashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      EventDateApi.middleware,
      UserApi.middleware,
      TicketApi.middleware,
      CategoryDataApi.middleware,
      DashboardApi.middleware
    ),
});
