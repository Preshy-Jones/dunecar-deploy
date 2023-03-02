import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BodyTypesPayload, CarBodyType } from "../../types/car";
import { Option } from "../../types/form";
import bodyTypeService from "./bodyTypeService";

interface BodyTypeState {
  bodyTypes: CarBodyType[];
  isLoading: boolean;
  selectedBodyTypes: string[];
  bodyTypeOptions: Option[] | undefined;
}

const initialState: BodyTypeState = {
  bodyTypes: [],
  isLoading: false,
  selectedBodyTypes: [],
  bodyTypeOptions: [],
};

export const getBodyTypes = createAsyncThunk(
  "model/getBodyTypes",
  async (payload: BodyTypesPayload, thunkAPI) => {
    try {
      return await bodyTypeService.fetchBodyTypes(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const bodyTypeSlice = createSlice({
  name: "bodyType",
  initialState,
  reducers: {
    setBodyTypeOptions: (state, action: PayloadAction<Option[]>) => {
      state.bodyTypeOptions = action.payload;
    },
    setSelectedBodyTypes: (state, action: PayloadAction<string[]>) => {
      state.selectedBodyTypes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBodyTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBodyTypes.fulfilled, (state: BodyTypeState, action) => {
        console.log(action);
        state.isLoading = false;
        state.bodyTypes = action.payload.data;
      })
      .addCase(getBodyTypes.rejected, (state: BodyTypeState, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setBodyTypeOptions, setSelectedBodyTypes } =
  bodyTypeSlice.actions;

export default bodyTypeSlice.reducer;
