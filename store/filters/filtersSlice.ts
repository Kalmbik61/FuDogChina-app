import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilter } from "../../components/Home/FIlters/useFilters.control";
import { TYPE_OF_MEAL } from "../../components/Home/useHome.control";

export interface IFiltersState {
  filters: IFilter[];
  activeFilter: IFilter;
}

const initialState: IFiltersState = {
  filters: [],
  activeFilter: {
    id: "",
    name: TYPE_OF_MEAL.ALL,
  },
};

export const cartSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(
      state: IFiltersState,
      action: PayloadAction<IFilter[]>
    ): IFiltersState {
      return {
        ...state,
        filters: action.payload,
      };
    },
    setActiveFilter(
      state: IFiltersState,
      action: PayloadAction<IFilter>
    ): IFiltersState {
      return {
        ...state,
        activeFilter: action.payload,
      };
    },
  },
});

export const { setFilters, setActiveFilter } = cartSlice.actions;

export default cartSlice.reducer;
