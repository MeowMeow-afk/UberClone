import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./feature/navSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});
