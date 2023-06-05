import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCourses,
  deleteCourse,
  createCourse,
} from "store/action/coursesAction";

export type CoursesState = {
  courses: {
    id: number;
    title: string;
    description: string;
  }[];
  isSubmitting?: boolean;
};

const initialState: CoursesState = {
  courses: [],
  isSubmitting: false,
};

export const counterSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // deleteCourse: (state, action: PayloadAction<number>) => {
    //   state.courses = state.courses.filter((course) => {
    //     return course.id !== action.payload;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        return { courses: [] };
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        return {
          courses: [...action.payload],
        };
      })
      .addCase(createCourse.pending, (state, action) => {
        return { courses: state.courses, isSubmitting: true };
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        return {
          courses: [state.courses, ...action.payload],
          isSubmitting: false,
        };
      })
      .addCase(deleteCourse.pending, (state, action) => {
        return { courses: state.courses, isSubmitting: true };
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        return {
          courses: state.courses.filter(
            (course) => course.id !== action.payload.id
          ),
          isSubmitting: false,
        };
      });
  },
});

export default counterSlice.reducer;
