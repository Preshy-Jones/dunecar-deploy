import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import {} from "../../types/car";

export interface FilterOptionsState {
  exteriorColourOptions: Option[];
  interiorColourOptions: Option[];
  featureOptions: Option[];
}

const initialState: FilterOptionsState = {
  exteriorColourOptions: [],
  interiorColourOptions: [],
  featureOptions: [],
};

const FilterOptionsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
});

// export const {} = FilterOptionsSlice.actions;

export default FilterOptionsSlice.reducer;
