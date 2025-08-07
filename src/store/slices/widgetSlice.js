import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeData: null,
  isLoading: false,
  error: null,
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    fetchTimeStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchTimeSuccess: (state, action) => {
      state.isLoading = false;
      state.timeData = action.payload;
    },
    fetchTimeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTimeStart, fetchTimeSuccess, fetchTimeFailure } =
  widgetSlice.actions;

export default widgetSlice.reducer;
