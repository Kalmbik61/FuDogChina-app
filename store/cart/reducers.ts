import { ICartState, IMealOrder } from "./cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  addToCart(state: ICartState, action: PayloadAction<IMealOrder>): ICartState {
    return {
      ...state,
      order: [...state.order, action.payload],
    };
  },
  removeFromCart(state: ICartState, action: PayloadAction<string>) {
    return {
      ...state,
      order: state.order.filter((or) => or.mealId !== action.payload),
    };
  },
};
