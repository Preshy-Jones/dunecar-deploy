import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car, CarMake, CarModel } from "../../types/car";
import { Option } from "../../types/form";
import { MathOperations } from "../../types/methods";
import carService from "./carService";

export interface CarState {
  car: Car | null;
  cars: Car[];
  makes: CarMake[];
  carFilter: {
    models: string[];
    makes: string[];
  };
  makeOptions: Option[] | undefined;
  models: CarModel[];
  isLoading: boolean;
  filterTotal: number;
  aFilterToggled: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],
  makes: [],
  makeOptions: [],
  carFilter: {
    models: [],
    makes: [],
  },
  models: [],
  isLoading: true,
  filterTotal: 0,
  aFilterToggled: false,
};

interface CarPayload {
  models?: string[];
  makes?: string[];
}

interface ModelPayload {
  makes: string[];
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
  reducers: {
    setFilterTotal: (state, action: PayloadAction<MathOperations>) => {
      const { payload } = action;
      if (payload === "add") {
        state.filterTotal += 1;
      } else if (payload === "subtract") {
        state.filterTotal -= 1;
      }
    },

    isAFilterToggled: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.aFilterToggled = payload;
    },
    setMakeOptions: (state, action: PayloadAction<Option[] | undefined>) => {
      const { payload } = action;
      state.makeOptions = payload;
    },
  },
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

export const { setFilterTotal, setMakeOptions } = carSlice.actions;

export default carSlice.reducer;
