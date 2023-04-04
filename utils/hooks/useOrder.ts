import { useAppSelector } from "../../store/hooks";

export const useOrder = () => useAppSelector((state) => state.cart);
