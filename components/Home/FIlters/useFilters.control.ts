import { useEffect, useState } from "react";
import { TYPE_OF_MEAL } from "../useHome.control";
import { Alert } from "react-native";
import { getFilters } from "../../../service/getFilters";
import { useFilters } from "../../../utils/hooks/useFilters";
import { useAppDispatch } from "../../../store/hooks";
import {
  setActiveFilter,
  setFilters,
} from "../../../store/filters/filtersSlice";

export enum FILTERS {
  ALL = "Все",
  MAIN = "Основные",
  DRINKS = "Напитки",
  SOUP = "Супы",
  ADDITIONAL = "Дополнительно",
  SALADS = "Салаты",
}

export interface IFilter {
  readonly name: TYPE_OF_MEAL;
  readonly id: string;
}

interface FiltersControl {
  readonly activeFilter: IFilter;
  readonly filters: IFilter[];

  onChangeActiveFilter(f: IFilter): void;
}

export const useFiltersControl = (): FiltersControl => {
  const dispatch = useAppDispatch();
  const { filters, activeFilter } = useFilters();

  const onChangeActiveFilter = (f: IFilter) => dispatch(setActiveFilter(f));

  const getFiltersData = async () => {
    const data = await getFilters();
    if (data instanceof Error) {
      Alert.alert("Ошибка сервера", "Попробуйте позже");
      return;
    }
    dispatch(setFilters([{ name: TYPE_OF_MEAL.ALL, id: "" }, ...data]));
  };

  useEffect(() => {
    getFiltersData();
  }, []);

  return {
    activeFilter,
    filters,

    onChangeActiveFilter,
  };
};
