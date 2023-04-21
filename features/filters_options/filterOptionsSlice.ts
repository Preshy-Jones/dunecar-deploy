import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import {} from "../../types/car";

export type ModelOptions = {
  make: string;
  models: Option[];
};

export interface FilterOptionsState {
  makeOptions: Option[];
  modelOptions: ModelOptions[];
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
  makeOptions: [],
  modelOptions: [],
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
          count?: number;
        }[];
      }>
    ) => {
      const { payload } = action;
      state[payload.field] = payload.value;
    },
    setModelOptions: (state, action: PayloadAction<ModelOptions[]>) => {
      const { payload } = action;
      state.modelOptions = payload;
    },
  },
});

export const { setFilterOptions, setModelOptions } = FilterOptionsSlice.actions;

export default FilterOptionsSlice.reducer;
