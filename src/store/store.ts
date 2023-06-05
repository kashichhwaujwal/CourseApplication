import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import coursesReducer from "./reducer/coursesReducer";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
