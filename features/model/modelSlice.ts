import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarMake, CarModel } from "../../types/car";
import modelService from "./modelService";

export interface CarState {
  models: CarModel[];
  modelsSelected: string[];
  isLoading: boolean;
}

const initialState: CarState = {
  models: [],
  modelsSelected: [],
  isLoading: true,
};

interface ModelPayload {
  makes: string[];
}

export const getModels = createAsyncThunk(
  "car/getModels",
  async (payload: ModelPayload, thunkAPI) => {
    const { makes } = payload;
    try {
      return await modelService.fetchModels(makes);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const modelSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setModelsSelected: (state, action: PayloadAction<string[]>) => {
      state.modelsSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getModels.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.models = action.payload.data;
      })
      .addCase(getModels.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setModelsSelected } = modelSlice.actions;

export default modelSlice.reducer;
