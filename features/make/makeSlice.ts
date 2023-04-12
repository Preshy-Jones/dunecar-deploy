import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car, CarMake, CarModel } from "../../types/car";
import { Option } from "../../types/form";
import makeService, { MakeFilterPayload } from "./makeService";

export type CarState = {
  makes: CarMake[];
  makeFilters: CarMakeFilter[];
  makeOptions: Option[] | undefined;
  isLoading: boolean;
  selectedMakes: string[];
};

type CarMakeFilter = {
  count: number;
  make: CarMake;
};
const initialState: CarState = {
  makes: [],
  makeFilters: [],
  makeOptions: [],
  isLoading: false,
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
    deleteSelectedMake: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.selectedMakes = state.selectedMakes.filter(
        (make) => make !== payload
      );
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

export const { setMakeOptions, setSelectedMakes, deleteSelectedMake } =
  makeSlice.actions;

export default makeSlice.reducer;
