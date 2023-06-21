import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: false,
    token: "",
    expiresIn: "",
    tutor: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
      state.tutor = action.payload.tutor;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice;
