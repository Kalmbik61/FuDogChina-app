import { useCallback, useState } from "react";
import { IMealOrder } from "../../../store/cart/cartSlice";
import { useOrder } from "../../../utils/hooks/useOrder";

interface ICartCOntrol {
  readonly order: IMealOrder[];
  readonly refresh: boolean;

  onRefresh(): void;
}

export const useCartControl = (): ICartCOntrol => {
  const order = useOrder();

  const [refresh, setRefresh] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    // refetch();
    setRefresh(false);
  }, []);

  return {
    order,
    refresh,
    onRefresh,
  };
};
