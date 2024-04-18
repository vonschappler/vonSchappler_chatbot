import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "Console",
};

const viewFeaturesSlice = createSlice({
  name: "viewSettings",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export default viewFeaturesSlice.reducer;

export const { setPage } = viewFeaturesSlice.actions;
