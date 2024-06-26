import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option } from "../../types/form";
import searchService from "./searchService";
import {
  CarMake,
  CarModel,
  Feature,
  FieldData,
  FilterOptionsInterface,
  FilterPayload,
} from "../../types/car";
import { useQuery } from "@tanstack/react-query";
import { years } from "../../components/Search/SideBar/Filters/Year";
import { priceOptions } from "../../components/Search/SideBar/Filters/Price";

export interface SearchState {
  toggledFilter: string | undefined;
  mobileFilterSortOpen: boolean;
  selectedSort: string;
  selectedExteriorColours: string[];
  selectedinteriorColours: string[];
  selectedFeatures: string[];
  featureOptions: Option[] | undefined;
  featuresLoading: boolean;
  filtersLoading: {
    makes: boolean;
    models: boolean;
    bodyTypes: boolean;
    fuelTypes: boolean;
    features: boolean;
    exterior_colors: boolean;
    interior_colors: boolean;
    transmissions: boolean;
    locations: boolean;
    series: boolean;
    bodyStyles: boolean;
    trims: boolean;
    vehicleConditions: boolean;
    packages: boolean;
    cylinders: boolean;
    mpg_highway: boolean;
  };
  makes: {
    _id: string;
    make: FieldData;
    count: number;
  }[];
  models: {
    _id: string;
    count: number;
    model: FieldData;
    make: FieldData;
  }[];
  bodyTypes: {
    _id: string;
    count: number;
    body_type: FieldData;
  }[];
  fuelTypes: {
    _id: string;
    count: number;
    fuel_type: FieldData;
  }[];
  features: {
    _id: string;
    count: number;
    feature: FieldData;
  }[];
  exterior_colors: {
    _id: string;
    count: number;
  }[];
  interior_colors: {
    _id: string;
    count: number;
  }[];
  locations: {
    _id: string;
    count: number;
  }[];
  years: {
    _id: string;
    count: number;
  }[];
  transmissions: {
    _id: string;
    count: number;
    transmission: FieldData;
  }[];
  series: {
    _id: string;
    count: number;
    series: FieldData;
  }[];
  bodyStyles: {
    _id: string;
    count: number;
    body_style: FieldData;
  }[];
  trims: {
    _id: string;
    count: number;
    trim: FieldData;
  }[];
  vehicleConditions: {
    _id: string;
    count: number;
  }[];
  cylinders: {
    _id: string;
    count: number;
  }[];
  mpg_highway: {
    _id: string;
    count: number;
  }[];
  packages: {
    _id: string;
    count: number;
  }[];
  filters: FilterOptionsInterface;
}

const initialState: SearchState = {
  toggledFilter: undefined,
  mobileFilterSortOpen: false,
  selectedSort: "",
  selectedExteriorColours: [],
  selectedinteriorColours: [],
  selectedFeatures: [],

  featureOptions: [],
  featuresLoading: false,
  filtersLoading: {
    makes: false,
    models: false,
    bodyTypes: false,
    fuelTypes: false,
    features: false,
    exterior_colors: false,
    interior_colors: false,
    transmissions: false,
    locations: false,
    series: false,
    bodyStyles: false,
    trims: false,
    vehicleConditions: false,
    packages: false,
    cylinders: false,
    mpg_highway: false,
  },
  makes: [],
  models: [],
  bodyTypes: [],
  fuelTypes: [],
  features: [],
  exterior_colors: [],
  interior_colors: [],
  transmissions: [],
  locations: [],
  years: [],
  series: [],
  bodyStyles: [],
  trims: [],
  vehicleConditions: [],
  packages: [],
  cylinders: [],
  mpg_highway: [],
  filters: {
    make: [],
    model: [],
    body_type: [],
    body_style: [],
    fuel_type: [],
    year_from: Number(years[years.length - 1].value),
    year_to: Number(years[0].value),
    price_from: Number(priceOptions[priceOptions.length - 1].value),
    price_to: Number(priceOptions[0].value),
    milleage: 0,
    exterior_color: [],
    interior_color: [],
    features: [],
    transmission: [],
    location: [],
    series: [],
    vehicle_condition: [],
    trim: [],
    cylinder_count: [],
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
      //simlate async call for 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
    setSelectedFilters: (
      state,
      action: PayloadAction<{
        field: string;
        value: string[] | string | number;
      }>
    ) => {
      const { payload } = action;
      state.filters[payload.field] = payload.value;
    },
    setAllFilters: (state, action: PayloadAction<FilterOptionsInterface>) => {
      const { payload } = action;
      //update state.filters, payload is an object with keys and values, we need to update the values of the keys in state.filters by adding the values from payload
      Object.keys(payload).forEach((key) => {
        state.filters[key] = payload[key];
      });
    },
    deleteSelectedOption: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { payload } = action;
      state.filters[payload.field] = state.filters[payload.field].filter(
        (option) => option != payload.value
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
      );
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
      .addCase(getFilterOptions.pending, (state: SearchState, { meta }) => {
        state.filtersLoading[meta.arg.key as string] = true;
      })
      .addCase(getFilterOptions.fulfilled, (state: SearchState, action) => {
        // console.log(action);
        state.filtersLoading[action.payload.key as string] = false;
        state[action.payload.key as string] = action.payload.response.data;
      })
      .addCase(getFilterOptions.rejected, (state: SearchState, { meta }) => {
        state.filtersLoading[meta.arg.key as string] = false;
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
  setSelectedFilters,
  deleteSelectedMake,
  deleteSelectedOption,
  setAllFilters,
} = searchSlice.actions;

export default searchSlice.reducer;
