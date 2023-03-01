import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import modelReducer from "../features/model/modelSlice";
import makeReducer from "../features/make/makeSlice";
import searchReducer from "../features/search/searchSlice";
import uiReducer from "../features/ui/uiSlice";
import bodyTypeReducer from "../features/bodyType/bodyTypeSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    model: modelReducer,
    make: makeReducer,
    search: searchReducer,
    ui: uiReducer,
    bodyType: bodyTypeReducer,
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
