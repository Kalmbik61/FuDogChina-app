import { ICartState } from "./cartSlice";

export const changeCountOfMeal = (
  action: "minus" | "plus",
  id: string,
  state: ICartState
): ICartState => {
  const index = state.order.findIndex((m) => m.mealId === id);
  const item = state.order[index];
  const edited = {
    ...item,
    count: item.count + (action === "minus" ? -1 : 1),
  };

  if (edited.count <= 0) {
    return {
      ...state,
      order: state.order.filter((item) => item.mealId !== id),
    };
  }

  return {
    ...state,
    order: [
      ...state.order.slice(0, index),
      edited,
      ...state.order.slice(index + 1),
    ],
  };
};
