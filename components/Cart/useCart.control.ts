import { useCallback, useState } from "react";
import { ICartState, IMealOrder } from "../../store/cart/cartSlice";
import { useOrder } from "../../utils/hooks/useOrder";

interface ICartCOntrol {
  readonly cart: ICartState;
  readonly refresh: boolean;

  onRefresh(): void;
}

export const useCartControl = (): ICartCOntrol => {
  const cart = useOrder();

  const [refresh, setRefresh] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    // refetch();
    setRefresh(false);
  }, []);

  return {
    cart,
    refresh,
    onRefresh,
  };
};
