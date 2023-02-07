import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
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
