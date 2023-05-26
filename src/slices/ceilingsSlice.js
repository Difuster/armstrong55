import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const ceilingsSlice = createSlice({
  name: "ceilings",
  initialState,
  reducers: {
  }
})

const selectCeilings = state => state.ceilings;

export { selectCeilings };
export default ceilingsSlice.reducer;
