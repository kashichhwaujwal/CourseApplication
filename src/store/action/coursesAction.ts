import { createAsyncThunk } from "@reduxjs/toolkit";
import { dzangoapi } from "store/axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await dzangoapi.get("/courses", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    return response.data;
  }
);

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (data: ICourse) => {
    const response = await dzangoapi.post("/courses", data, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    return response.data;
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id: number) => {
    const response = await dzangoapi.delete(`/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    return response.data;
  }
);
