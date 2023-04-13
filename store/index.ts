import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import filters from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
