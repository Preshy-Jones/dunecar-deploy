import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import modelReducer from "../features/model/modelSlice";
import makeReducer from "../features/make/makeSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    model: modelReducer,
    make: makeReducer,
    search: searchReducer,
  },

  //  middleware;getDefaultMiddleware => getDefaultMiddleware().concat(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
