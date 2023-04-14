import { ICartState, IMealOrder } from "./cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { changeCountOfMeal } from "./helpers";

export const reducers = {
  addToCart(state: ICartState, action: PayloadAction<IMealOrder>): ICartState {
    const find = state.order.find((m) => m.mealId === action.payload.mealId);

    if (!find) {
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    }

    if (
      find.mealId === action.payload.mealId &&
      find.additional !== action.payload.additional
    ) {
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    }

    const order = state.order.map((item) => {
      if (
        item.mealId === action.payload.mealId &&
        item.additional === action.payload.additional
      ) {
        return {
          ...item,
          count: item.count + 1,
        };
      } else return item;
    });

    return {
      ...state,
      order,
    };
  },
  plusMeal(state: ICartState, action: PayloadAction<string>) {
    return changeCountOfMeal("plus", action.payload, state);
  },
  minusMeal(state: ICartState, action: PayloadAction<string>) {
    return changeCountOfMeal("minus", action.payload, state);
  },
  removeFromCart(state: ICartState, action: PayloadAction<string>) {
    return {
      ...state,
      order: state.order.filter((or) => or.mealId !== action.payload),
    };
  },
  clearCart(state: ICartState) {
    return {
      ...state,
      order: [],
    };
  },
};
