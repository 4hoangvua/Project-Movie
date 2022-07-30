import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "~/Services/movieAPI";
let user = null;
if (localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"));
}
const inititalState = {
  userLogin: user,
};

export const userLoginActive = createAsyncThunk(
  "userLogin/userLoginActive",
  async (info) => {
    const data = await movieAPI.accountUser(info);
    return data;
  }
);
export const userRegister = createAsyncThunk(
  "userLogin/userRegister",
  async (info) => {
    await movieAPI.userRegister(info);
  }
);
const userSlice = createSlice({
  name: "userLogin",
  initialState: inititalState,
  reducers: {},
  extraReducers: {
    [userLoginActive.fulfilled]: (state, { payload }) => {
      state.userLogin = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      alert("Login Success");
    },
    [userLoginActive.rejected]: () => {
      alert("Tai khoan mat khau khong chinh xac!");
    },
    [userRegister.fulfilled]: () => {
      alert("Register success");
    },
    [userRegister.rejected]: () => {
      alert("Tai khoan da ton tai");
    },
  },
});
export default userSlice.reducer;
