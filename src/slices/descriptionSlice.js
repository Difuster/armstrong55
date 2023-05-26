import { createSlice } from "@reduxjs/toolkit";
import { descriptionState } from "./state";

const descriptionSlice = createSlice({
  name: "description",
  initialState: descriptionState,
  reducers: {
  }
})

const selectDescriptions = state => state.description;

export { selectDescriptions };
export default descriptionSlice.reducer;
