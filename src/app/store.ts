import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import backgroundLayerReducer from "./slices/backgroundLayerSlice";

export const store = configureStore({
  reducer: {
    backgroundLayer: backgroundLayerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
