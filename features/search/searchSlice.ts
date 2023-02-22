import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";

export interface SearchState {
  filter: string | undefined;
}

const initialState: SearchState = {
  filter: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.filter = payload;
    },
  },
});

export const { setFilter } = searchSlice.actions;

export default searchSlice.reducer;
