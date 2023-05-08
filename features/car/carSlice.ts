import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarMake, CarModel, CarPayload } from "../../types/car";
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
  pageInfo: {
    count: number;
    limit: number;
  };
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
  pageInfo: {
    count: 0,
    limit: 0,
  },
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

export const getCar = createAsyncThunk(
  "car/getCar",
  async (payload: string, thunkAPI) => {
    try {
      return await carService.fetchCar(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getCars = createAsyncThunk(
  "car/getCars",
  async (payload: CarPayload, thunkAPI) => {
    console.log(payload);
    try {
      return await carService.fetchCars(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getMoreCarsPagination = createAsyncThunk(
  "car/getMoreCars",
  async (payload: CarPayload, thunkAPI) => {
    try {
      return await carService.fetchCars(payload);
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
        console.log(action.payload.data);
        state.isLoading = false;
        state.cars = action.payload.data.cars[0].results;
        // state.carFilter = action.payload.data.filter;
        state.pageInfo = action.payload.data.cars[0].pageInfo[0];
      })
      .addCase(getCars.rejected, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
      })
      .addCase(getMoreCarsPagination.pending, (state) => {
        state.moreCarsLoading = true;
      })
      .addCase(getMoreCarsPagination.fulfilled, (state: CarState, action) => {
        state.moreCarsLoading = false;
        state.cars = action.payload.data.cars[0].results;
        // state.carFilter = action.payload.data.filter;
        state.pageInfo = action.payload.data.cars[0].pageInfo[0];
      })
      .addCase(getMoreCarsPagination.rejected, (state: CarState, action) => {
        // console.log(action);
        state.moreCarsLoading = false;
      })
      .addCase(getCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCar.fulfilled, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
        state.car = action.payload.data;
      })
      .addCase(getCar.rejected, (state: CarState, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setFilterTotal, setOptionDeleted } = carSlice.actions;

export default carSlice.reducer;
