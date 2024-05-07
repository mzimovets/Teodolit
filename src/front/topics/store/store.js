import { configureStore } from "@reduxjs/toolkit";
import disabledStateReducer from "./disabledStateSlice";

export const store = configureStore({
  reducer: {
    disabledState: disabledStateReducer,
  },
});
