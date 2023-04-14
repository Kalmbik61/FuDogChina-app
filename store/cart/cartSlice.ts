import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

export interface IMealOrder {
  readonly mealId: string;
  readonly imgUrl: string;
  readonly price: number;
  readonly additional?: string;
  readonly name: string;
  count: number;
}

export interface ICartState {
  order: IMealOrder[];
}
const initialState: ICartState = {
  order: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
});

export const { addToCart, plusMeal, minusMeal, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
