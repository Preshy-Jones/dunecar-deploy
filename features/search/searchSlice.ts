import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import searchService from "./searchService";
import { Feature } from "../../types/car";
import { useQuery } from "@tanstack/react-query";

export interface SearchState {
  toggledFilter: string | undefined;
  mobileFilterSortOpen: boolean;
  selectedSort: string;
  selectedExteriorColours: string[];
  selectedinteriorColours: string[];
  selectedFeatures: string[];
  features: Feature[];
  featureOptions: Option[] | undefined;
}

const initialState: SearchState = {
  toggledFilter: undefined,
  mobileFilterSortOpen: false,
  selectedSort: "",
  selectedExteriorColours: [],
  selectedinteriorColours: [],
  selectedFeatures: [],
  features: [],
  featureOptions: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.toggledFilter = payload;
    },
    setMobileFilterSortOpen: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.mobileFilterSortOpen = payload;
    },
    setSelectedSort: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.selectedSort = payload;
    },
    setSelectedExteriorColours: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedExteriorColours = payload;
    },
    setSelectedInteriorColours: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedinteriorColours = payload;
    },
    setSelectedFeatures: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedFeatures = payload;
    },
    setFeatureOptions: (state, action: PayloadAction<Option[] | undefined>) => {
      const { payload } = action;
      state.featureOptions = payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getFeatures.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  // },
});

export const {
  setFilter,
  setMobileFilterSortOpen,
  setSelectedSort,
  setSelectedExteriorColours,
  setSelectedInteriorColours,
  setSelectedFeatures,
  setFeatureOptions
} = searchSlice.actions;

export default searchSlice.reducer;
