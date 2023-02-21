import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car, CarMake, CarModel } from "../../types/car";
import { Option } from "../../types/form";
import { MathOperations } from "../../types/methods";
import makeService from "./makeService";

export interface CarState {
  makes: CarMake[];
  makeOptions: Option[] | undefined;
  isLoading: boolean;
}

const initialState: CarState = {
  makes: [],
  makeOptions: [],
  isLoading: true,
};

export const getMakes = createAsyncThunk(
  "car/getMakes",
  async (_, thunkAPI) => {
    try {
      return await makeService.fetchMakes();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const makeSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setMakeOptions: (state, action: PayloadAction<Option[] | undefined>) => {
      const { payload } = action;
      state.makeOptions = payload;
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { setMakeOptions } = makeSlice.actions;

export default makeSlice.reducer;
