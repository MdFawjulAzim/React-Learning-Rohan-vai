import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../Features/AuthApi";

export const store = configureStore({
  reducer: {
    //slice Call

    [AuthApi.reducerPath]: AuthApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(AuthApi.middleware),
});
