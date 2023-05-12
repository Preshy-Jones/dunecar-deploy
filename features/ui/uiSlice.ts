import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  dropDownOpen: boolean;
  carDetailsActiveTab: number;
  currentGalleryIndex: number;
}

const initialState: UiState = {
  isLoading: false,
  dropDownOpen: false,
  carDetailsActiveTab: 0,
  currentGalleryIndex: 0,
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
    setCurrentGalleryIndex: (state, action) => {
      const { payload } = action;
      state.currentGalleryIndex = payload;
    },
  },
});

export const {
  setDropDownOpen,
  setCarDetailsActiveTab,
  setCurrentGalleryIndex,
} = uiSlice.actions;

export default uiSlice.reducer;
