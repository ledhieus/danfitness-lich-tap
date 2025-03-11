import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false
};

export const checkLoginSlice = createSlice({
  name: "checkLogin",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = checkLoginSlice.actions;
export default checkLoginSlice.reducer;
