import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car, CarMake, CarModel } from "../../types/car";
import carService from "./carService";

export interface CarState {
  car: Car | null;
  cars: Car[];
  makes: CarMake[];
  carFilter: {
    model: (string | number)[];
    make: (string | number)[];
  };
  models: CarModel[];
  isLoading: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],
  makes: [],
  carFilter: {
    model: [],
    make: [],
  },
  models: [],
  isLoading: true,
};

interface CarPayload {
  models?: (string | number)[];
  makes?: (string | number)[];
}

interface ModelPayload {
  makes: (string | number)[];
}

export const getCars = createAsyncThunk(
  "car/getCars",
  async (payload: CarPayload, thunkAPI) => {
    const { models, makes } = payload;
    try {
      return await carService.fetchCars(models, makes);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getMakes = createAsyncThunk(
  "car/getMakes",
  async (_, thunkAPI) => {
    try {
      return await carService.fetchMakes();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getModels = createAsyncThunk(
  "car/getModels",
  async (payload: ModelPayload, thunkAPI) => {
    const { makes } = payload;
    try {
      return await carService.fetchModels(makes);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.cars = action.payload.data.cars;
        state.carFilter = action.payload.data.filter;
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(getMakes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMakes.fulfilled, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
        state.makes = action.payload.data;
      })
      .addCase(getMakes.rejected, (state: CarState, action) => {
        console.log(action);
        state.isLoading = false;
      })
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

// export const {} = carSlice.actions;

export default carSlice.reducer;
