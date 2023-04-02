import { useRouter } from "expo-router";
import { IMealProps } from "./Meal.props";
import { ROUTS } from "../../../utils/routesNames";

interface IMealControl {
  toMealDetails(): void;
}

export const useMealControl = (props: IMealProps): IMealControl => {
  const router = useRouter();

  const toMealDetails = () => {
    router.push(`${ROUTS.MEAL_DETAILS}/${props.id}`);
  };

  return {
    toMealDetails,
  };
};
