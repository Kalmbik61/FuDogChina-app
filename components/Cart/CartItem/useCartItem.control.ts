import { useDispatch } from "react-redux";
import { ICartItemProps } from "./CartItem.props";
import { plusMeal, minusMeal } from "../../../store/cart/cartSlice";

interface ICartItemControl {
  plusMealCount(): void;
  minusMealCount(): void;
}

export const useCartItemControl = (props: ICartItemProps): ICartItemControl => {
  const dispatch = useDispatch();

  const plusMealCount = () => {
    dispatch(plusMeal(props.mealId));
  };

  const minusMealCount = () => {
    dispatch(minusMeal(props.mealId));
  };

  return { plusMealCount, minusMealCount };
};
