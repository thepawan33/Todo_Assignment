import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: { open: "", severity: "", message: "" },
  },

  reducers: {
    handleAlert: (state, { payload }) => {
      state.alert = { ...state.alert, ...payload };
    },
  },
});

export const { handleAlert } = alertSlice.actions;
export default alertSlice.reducer;
