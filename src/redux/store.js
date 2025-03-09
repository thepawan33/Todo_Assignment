import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import formReducer from "./slices/formSlice";
import alertReducer from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: formReducer,
    alert: alertReducer,
  },
});
