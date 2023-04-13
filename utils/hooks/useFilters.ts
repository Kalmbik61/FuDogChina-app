import { useAppSelector } from "../../store/hooks";

export const useFilters = () => useAppSelector((state) => state.filters);
