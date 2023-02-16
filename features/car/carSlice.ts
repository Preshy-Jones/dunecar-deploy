import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarMake, CarModel } from "../../types/car";
import { Option } from "../../types/form";
import { MathOperations } from "../../types/methods";
import carService from "./carService";

export interface CarState {
  car: Car | null;
  cars: Car[];

  carFilter: {
    models: string[];
    makes: string[];
  };

  isLoading: boolean;
  filterTotal: number;
  aFilterToggled: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],

  carFilter: {
    models: [],
    makes: [],
  },

  isLoading: false,
  filterTotal: 0,
  aFilterToggled: false,
};

interface CarPayload {
  models?: string[];
  makes?: string[];
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cars = action.payload.data.cars;
        state.carFilter = action.payload.data.filter;
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setFilterTotal } = carSlice.actions;

export default carSlice.reducer;
