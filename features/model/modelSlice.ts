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
export interface DeleteModelsofMakePayload {
  make: string;
  models: string[];
}

export const getModels = createAsyncThunk(
  "model/getModels",
  async (payload: ModelPayload, thunkAPI) => {
    const { makes } = payload;
    try {
      return await modelService.fetchModels(makes);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteModelsofMake = createAsyncThunk(
  "model/deleteModelsofMake",
  async (payload: DeleteModelsofMakePayload, thunkAPI) => {
    const { make, models } = payload;
    try {
      return await modelService.deleteModelsofMakehandler({ make, models });
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelsSelected: (state, action: PayloadAction<string[]>) => {
      state.modelsSelected = action.payload;
    },
    deleteSelectedModel: (state, action: PayloadAction<string>) => {
      state.modelsSelected = state.modelsSelected.filter(
        (model) => model !== action.payload
      );
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
      })
      .addCase(deleteModelsofMake.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteModelsofMake.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.modelsSelected = action.payload.data;
      })
      .addCase(deleteModelsofMake.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setModelsSelected, deleteSelectedModel } = modelSlice.actions;

export default modelSlice.reducer;
