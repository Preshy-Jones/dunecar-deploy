import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  dropDownOpen: boolean;
}

const initialState: UiState = {
  isLoading: false,
  dropDownOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDropDownOpen: (state, action) => {
      const { payload } = action;
      state.dropDownOpen = payload;
    },
  },
});

export const { setDropDownOpen } = uiSlice.actions;

export default uiSlice.reducer;
