import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  dropDownOpen: boolean;
  carDetailsActiveTab: number;
}

const initialState: UiState = {
  isLoading: false,
  dropDownOpen: false,
  carDetailsActiveTab: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDropDownOpen: (state, action) => {
      const { payload } = action;
      state.dropDownOpen = payload;
    },
    setCarDetailsActiveTab: (state, action) => {
      const { payload } = action;
      state.carDetailsActiveTab = payload;
    },
  },
});

export const { setDropDownOpen, setCarDetailsActiveTab } = uiSlice.actions;

export default uiSlice.reducer;
