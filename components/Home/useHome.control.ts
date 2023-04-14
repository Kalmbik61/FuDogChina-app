import { useCallback, useEffect, useState } from "react";
import { getMeals } from "../../service/getMeals";
import { Alert } from "react-native";
import { useFilters } from "../../utils/hooks/useFilters";

export enum TYPE_OF_MEAL {
  ALL = "ALL",
  MAIN = "MAIN",
  DRINKS = "DRINKS",
  SOUP = "SOUP",
  ADDITIONAL = "ADDITIONAL",
  SALADS = "SALADS",
}

export interface IAdditional {
  readonly additionalPriceOption: number;
  readonly additionalNameOption: string;
}

export interface IMeal {
  readonly id: string;
  readonly imageUrl: string;
  readonly name: string;
  readonly price: number;
  readonly type: TYPE_OF_MEAL;
  readonly additional?: IAdditional[];
  readonly description?: string;
}

interface IHomeControl {
  readonly meals: IMeal[];
  readonly refresh: boolean;
  readonly firstLoad: boolean;

  onRefresh(): void;
}

export const useHomeControl = (): IHomeControl => {
  const { activeFilter } = useFilters();
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const getMealsData = async () => {
    setRefresh(true);
    const data = await getMeals(activeFilter);
    if (data instanceof Error) {
      Alert.alert("Ошибка сервера", "Попробуйте позже");
      setFirstLoad(false);
      return;
    }
    const mealsArr: IMeal[] = data.map((item) => ({
      id: item._id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      additional: item.additional,
      description: item.description,
      type: item.category,
    }));
    setMeals(mealsArr);
    setRefresh(false);
    setFirstLoad(false);
  };

  useEffect(() => {
    getMealsData();
  }, [activeFilter]);

  const onRefresh = useCallback(() => {
    getMealsData();
  }, []);

  return {
    meals,
    refresh,
    firstLoad,

    onRefresh,
  };
};
