import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../Features/AuthApi.js";
import authSlice from "../AuthSlice/AuthSlice.js";
import EventDateApi from "../Features/EventData/EventDateApi.js";
import UserApi from "../Features/UserData/UserDataApi.js";

export const store = configureStore({
  reducer: {
    // reducer call
    Auth: authSlice,
    // api call
    [AuthApi.reducerPath]: AuthApi.reducer,
    [EventDateApi.reducerPath]: EventDateApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      EventDateApi.middleware,
      UserApi.middleware
    ),
});
