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
  count: number;
  limit: number | null;
  isLoading: boolean;
  moreCarsLoading: boolean;
  filterTotal: number;
  aFilterToggled: boolean;
  optionDeleted: boolean;
}

const initialState: CarState = {
  car: null,
  cars: [],
  count: 0,
  limit: null,
  moreCarsLoading: false,
  carFilter: {
    models: [],
    makes: [],
  },
  optionDeleted: false,
  isLoading: false,
  filterTotal: 0,
  aFilterToggled: false,
};

interface CarPayload {
  models?: string[];
  makes?: string[];
  limit?: string;
}

export const getCars = createAsyncThunk(
  "car/getCars",
  async (payload: CarPayload, thunkAPI) => {
    const { models, makes, limit } = payload;
    try {
      return await carService.fetchCars({ models, makes, limit });
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getMoreCarsPagination = createAsyncThunk(
  "car/getMoreCars",
  async (payload: CarPayload, thunkAPI) => {
    const { models, makes, limit } = payload;
    try {
      return await carService.fetchCars({ models, makes, limit });
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
    setOptionDeleted: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.optionDeleted = payload;
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
        state.cars = action.payload.data.results.cars;
        state.carFilter = action.payload.data.filter;
        state.count = action.payload.data.results.count;
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
      })
      .addCase(getMoreCarsPagination.pending, (state) => {
        state.moreCarsLoading = true;
      })
      .addCase(getMoreCarsPagination.fulfilled, (state: CarState, action) => {
        // console.log(action);
        state.moreCarsLoading = false;
        state.cars = action.payload.data.results.cars;
        state.carFilter = action.payload.data.filter;
        state.count = action.payload.data.results.count;
      })
      .addCase(getMoreCarsPagination.rejected, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setFilterTotal, setOptionDeleted } = carSlice.actions;

export default carSlice.reducer;
