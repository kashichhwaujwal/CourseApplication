import { createAsyncThunk } from "@reduxjs/toolkit";
import { dzangoapi } from "store/axios";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (data: IAuth) => {
    const response = await dzangoapi.post("auth/local", data);

    return response.data;
  }
);
