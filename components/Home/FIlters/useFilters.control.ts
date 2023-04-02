import { useState } from "react";

export enum FILTERS {
  ALL = "Все",
  MEAT = "Мясо",
  DINKS = "Напитки",
}

interface FiltersControl {
  readonly activeFilter: FILTERS;
  readonly filters: FILTERS[];

  onChangeActiveFilter(f: FILTERS): void;
}

export const useFiltersControl = (): FiltersControl => {
  const [activeFilter, setActiveFilter] = useState<FILTERS>(FILTERS.ALL);

  const onChangeActiveFilter = (f: FILTERS) => setActiveFilter(f);

  return {
    activeFilter,
    filters: Object.values(FILTERS),

    onChangeActiveFilter,
  };
};
