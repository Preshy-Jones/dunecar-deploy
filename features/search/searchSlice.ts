import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import searchService from "./searchService";
import {
  CarMake,
  CarModel,
  Feature,
  FilterOptionsInterface,
  FilterPayload,
} from "../../types/car";
import { useQuery } from "@tanstack/react-query";

export interface SearchState {
  toggledFilter: string | undefined;
  mobileFilterSortOpen: boolean;
  selectedSort: string;
  selectedExteriorColours: string[];
  selectedinteriorColours: string[];
  selectedFeatures: string[];
  features: Feature[];
  featureOptions: Option[] | undefined;
  featuresLoading: boolean;
  filtersLoading: boolean;
  makes: {
    _id: string;
    make: CarMake;
    count: number;
  }[];
  models: {
    _id: string;
    count: number;
    model: CarModel;
    make: CarMake;
  }[];
  exterior_colors: string[];
  interior_colors: string[];
  filters: FilterOptionsInterface;
}

const initialState: SearchState = {
  toggledFilter: undefined,
  mobileFilterSortOpen: false,
  selectedSort: "",
  selectedExteriorColours: [],
  selectedinteriorColours: [],
  selectedFeatures: [],
  features: [],
  featureOptions: [],
  featuresLoading: false,
  filtersLoading: false,
  makes: [],
  models: [],
  exterior_colors: [],
  interior_colors: [],
  filters: {
    make: [],
    model: [],
    body_type: [],
    fuel_type: [],
    year_from: 0,
    year_to: 0,
    price_from: 0,
    price_to: 0,
    milleage: 0,
    exterior_color: [],
    interior_color: [],
    features: [],
  },
};

export const getFeatures = createAsyncThunk(
  "search/getFeatures",
  async (_, thunkAPI) => {
    try {
      const response = await searchService.fetchFeatures();
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getFilterOptions = createAsyncThunk(
  "search/getFilterOptions",
  async (payload: FilterPayload, thunkAPI) => {
    try {
      const response = await searchService.fetchFiltersOptions(payload);
      return {
        response,
        key: payload.key,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.toggledFilter = payload;
    },
    setMobileFilterSortOpen: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.mobileFilterSortOpen = payload;
    },
    setSelectedSort: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.selectedSort = payload;
    },
    setSelectedExteriorColours: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedExteriorColours = payload;
    },
    setSelectedInteriorColours: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedinteriorColours = payload;
    },
    setSelectedFeatures: (state, action: PayloadAction<string[]>) => {
      const { payload } = action;
      state.selectedFeatures = payload;
    },
    setFeatureOptions: (state, action: PayloadAction<Option[] | undefined>) => {
      const { payload } = action;
      state.featureOptions = payload;
    },
    setFilterOptions: (
      state,
      action: PayloadAction<{ field: string; value: string[] }>
    ) => {
      const { payload } = action;
      state.filters[payload.field] = payload.value;
    },
    deleteSelectedOption: (
      state,
      action: PayloadAction<{ field: string; value: string[] }>
    ) => {
      const { payload } = action;
      state.filters[payload.field] = state.filters[payload.field].filter(
        (option) => option != payload
      );
    },
    deleteSelectedMake: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.filters.make = (state.filters.make as string[]).filter(
        (make) => make !== payload
      );
      state.filters.model = (state.filters.model as string[]).filter(
        (model) => {
          const modelObj = state.models.find((m) => m._id === model);
          if (modelObj) {
            return modelObj.make._id !== payload;
          }
          return true;
        }
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeatures.pending, (state, action) => {
        state.featuresLoading = true;
      })
      .addCase(getFeatures.fulfilled, (state, action) => {
        state.featuresLoading = false;
        console.log(action.payload);
        state.features = action.payload;
      })
      .addCase(getFeatures.rejected, (state, action) => {
        state.featuresLoading = false;
      })
      .addCase(getFilterOptions.pending, (state) => {
        state.filtersLoading = true;
      })
      .addCase(getFilterOptions.fulfilled, (state: SearchState, action) => {
        console.log(action);
        state.filtersLoading = false;
        state[action.payload.key as string] = action.payload.response.data;
      })
      .addCase(getFilterOptions.rejected, (state: SearchState, action) => {
        console.log(action);
        state.filtersLoading = false;
      });
  },
});

export const {
  setFilter,
  setMobileFilterSortOpen,
  setSelectedSort,
  setSelectedExteriorColours,
  setSelectedInteriorColours,
  setSelectedFeatures,
  setFeatureOptions,
  setFilterOptions,
  deleteSelectedMake
} = searchSlice.actions;

export default searchSlice.reducer;
