import { createSlice } from "@reduxjs/toolkit";

export const backgroundLayerSlice = createSlice({
  name: "backgroundLayer",
  initialState: {
    isScrollEnabled: true,
  },
  reducers: {
    enableScroll: (state, action) => {
      state.isScrollEnabled = action.payload;
    },
  },
});

export const { enableScroll } = backgroundLayerSlice.actions;

export const selectIsScrollEnabled = (state: any) =>
  state.backgroundLayer.isScrollEnabled;

export default backgroundLayerSlice.reducer;
