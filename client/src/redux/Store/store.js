import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../Features/AuthApi.js";
import authSlice from "../AuthSlice/AuthSlice.js";

export const store = configureStore({
  reducer: {
    // reducer call
    Auth: authSlice,
    // api call
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});
