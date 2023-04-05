import { useCallback, useEffect, useState } from "react";
import { ICartState } from "../../store/cart/cartSlice";
import { useOrder } from "../../utils/hooks/useOrder";

interface ICartCOntrol {
  readonly cart: ICartState;
  readonly refresh: boolean;
  readonly address?: string;
  readonly loading: boolean;
  readonly hasOrder: boolean;
  readonly amount: number;

  onRefresh(): void;
  onAddressChange(ads: string): void;
  onSubmit(): void;
}

export const useCartControl = (): ICartCOntrol => {
  const cart = useOrder();

  const [refresh, setRefresh] = useState<boolean>(false);
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    calcAmountCart();
  }, [cart.order]);

  const calcAmountCart = useCallback(() => {
    const amount = cart.order
      .map((item) => item.price * item.count)
      .reduce((a, b) => a + b, 0);
    setAmount(amount);
  }, [cart.order]);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    // refetch();
    setRefresh(false);
  }, []);

  const onAddressChange = (ads: string) => setAddress(ads);

  const onSubmit = () => {
    setLoading(true);
    console.log("ORDER = ", { cart, address });

    //API
    setTimeout(() => setLoading(false), 500);
  };

  return {
    cart,
    refresh,
    address,
    loading,
    amount,
    hasOrder: amount > 0,

    onRefresh,
    onAddressChange,
    onSubmit,
  };
};
