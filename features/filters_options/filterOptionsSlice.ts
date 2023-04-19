import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import {} from "../../types/car";

export interface FilterOptionsState {
  exteriorColourOptions: Option[];
  interiorColourOptions: Option[];
  featureOptions: Option[];
  transmissionOptions: Option[];
  locationOptions: Option[];
  bodyTypeOptions: Option[];
  seriesOptions: Option[];
  packagesOptions: Option[];
  vehicleConditionsOptions: Option[];
  trimsOptions: Option[];
  bodyStyleOptions: Option[];
  fuelTypeOptions: Option[];
  packagesOOptions: Option[];
  cylinderCountOptions: Option[];
  mpgHighwayOptions: Option[];
}

const initialState: FilterOptionsState = {
  exteriorColourOptions: [],
  interiorColourOptions: [],
  featureOptions: [],
  transmissionOptions: [],
  locationOptions: [],
  bodyTypeOptions: [],
  seriesOptions: [],
  packagesOptions: [],
  vehicleConditionsOptions: [],
  trimsOptions: [],
  bodyStyleOptions: [],
  fuelTypeOptions: [],
  packagesOOptions: [],
  cylinderCountOptions: [],
  mpgHighwayOptions: [],
};

const FilterOptionsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilterOptions: (
      state,
      action: PayloadAction<{
        field: string;
        value: {
          label: string;
          value: string;
          count: number;
        }[];
      }>
    ) => {
      const { payload } = action;
      state[payload.field] = payload.value;
    },
  },
});

export const { setFilterOptions } = FilterOptionsSlice.actions;

export default FilterOptionsSlice.reducer;
