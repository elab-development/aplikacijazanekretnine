import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/Features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});