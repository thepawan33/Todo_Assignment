import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    inputValue: { name: "", email: "", password: "" },
  },
  reducers: {
    handleInput: (state, { payload }) => {
      state.inputValue = { ...state.inputValue, ...payload };
    },
  },
});

export const { handleInput } = formSlice.actions;
export default formSlice.reducer;
