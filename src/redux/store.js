import { configureStore } from "@reduxjs/toolkit";
import checkLoginReducer from "./slices/checkLogin";
export const store = configureStore({
  reducer: {
    checkLogin: checkLoginReducer,
  }
})