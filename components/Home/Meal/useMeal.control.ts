import { useRouter } from "expo-router";
import { IMealProps } from "./Meal.props";
import { ROUTS } from "../../../utils/routesNames";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart/cartSlice";

interface IMealControl {
  toMealDetails(): void;
  addMeal(): void;
}

export const useMealControl = (props: IMealProps): IMealControl => {
  const router = useRouter();
  const dispatch = useDispatch();

  const toMealDetails = () => {
    router.push(`${ROUTS.MEAL_DETAILS}/${props.id}`);
  };

  const addMeal = () => {
    dispatch(
      addToCart({
        mealId: props.id,
        name: props.name,
        price: props.price,
        count: 1,
        imgUrl: props.imageUrl,
      })
    );
  };

  return {
    toMealDetails,
    addMeal,
  };
};
