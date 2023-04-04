import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

export interface IMealOrder {
  readonly mealId: string;
  readonly imgUrl: string;
  readonly price: number;
  readonly count: number;
  readonly additional?: string;
  readonly name: string;
}

export interface ICartState {
  order: IMealOrder[];
  amount: number;
}

const MOCK: ICartState = {
  order: [
    {
      mealId: "1",
      imgUrl: "https://taplink.st/p/c/7/7/9/41558354.jpg?0",
      name: "Свинина Гобажоу",
      price: 480,
      count: 1,
      additional: "Соус Габаджо",
    },
    {
      mealId: "2",
      imgUrl: "https://taplink.st/p/4/1/7/4/41533214.jpg?0",
      name: "Курица генерала Дзо",
      price: 470,
      count: 2,
    },
  ],
  amount: 950,
};

const initialState: ICartState = {
  ...MOCK,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
