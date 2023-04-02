import { ReactNode } from "react";
import { FILTERS } from "../useFilters.control";

export interface IFilterProps {
  readonly children: ReactNode;
  readonly active?: boolean;

  onPress(): void;
}
