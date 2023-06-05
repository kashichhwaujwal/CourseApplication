import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "store/action/authAction";

interface authState {
  user: IUser;
}

const initialState: authState = {
  user: {
    email: "",
    profile: {
      full_name: "",
    },
  },
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        return { ...state };
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        return { ...action.payload };
      });
  },
});

export default counterSlice.reducer;
