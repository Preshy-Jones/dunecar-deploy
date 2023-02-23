import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarMake, CarModel } from "../../types/car";
import { Option } from "../../types/form";
import makeService from "./makeService";

export interface CarState {
  makes: CarMake[];
  makeOptions: Option[] | undefined;
  isLoading: boolean;
  selectedMakes: string[];
}

const initialState: CarState = {
  makes: [],
  makeOptions: [],
  isLoading: true,
  selectedMakes: [],
};

export const getMakes = createAsyncThunk(
  "make/getMakes",
  async (_, thunkAPI) => {
    try {
      return await makeService.fetchMakes();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const makeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {
    setMakeOptions: (state, action: PayloadAction<Option[] | undefined>) => {
      const { payload } = action;
      state.makeOptions = payload;
    },
    setSelectedMakes: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedMakes = payload;
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

export const { setMakeOptions, setSelectedMakes } = makeSlice.actions;

export default makeSlice.reducer;
