import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Alert, ViewStyle } from "react-native";
import { ICartState, clearCart } from "../../store/cart/cartSlice";
import { useOrder } from "../../utils/hooks/useOrder";
import { RUB } from "../../constants/Currency";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useAppDispatch } from "../../store/hooks";
import { useRouter } from "expo-router";
import { ROUTS } from "../../utils/routesNames";
import Toast from "react-native-toast-message";
import tgSender from "../../utils/tgSender";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface ICartCOntrol {
  readonly cart: ICartState;
  readonly refresh: boolean;
  readonly isDelivery: boolean;
  readonly address?: string;
  readonly phone?: string;
  readonly loading: boolean;
  readonly hasOrder: boolean;
  readonly amount: number;
  readonly animatedStyles: ViewStyle;

  onRefresh(): void;
  onAddressChange(ads: string): void;
  onSubmit(): void;
  onDelivery(): void;
  onPhoneChange(p: string): void;
}

export const useCartControl = (): ICartCOntrol => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useOrder();
  const [isDelivery, setIsDelivery] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [address, setAddress] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  const height = useSharedValue(25);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value),
    };
  });

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

  const onDelivery = () => setIsDelivery((prev) => !prev);

  useEffect(() => {
    if (isDelivery) {
      height.value = 120;
      return;
    }
    height.value = 25;
  }, [isDelivery]);

  const onAddressChange = (ads: string) => setAddress(ads);
  const onPhoneChange = (ads: string) => setPhone(ads);

  const onSubmit = async () => {
    if (isDelivery && (!address || !phone)) {
      Alert.alert("Укажите адрес и телефон");
      return;
    }
    setLoading(true);

    const deliveryData = `${
      isDelivery ? `Адрес доставки: ${address} \n Телефон: ${phone}` : ""
    }`;

    const message = `Заказ:\n${cart.order
      .map((item) => `- ${item.name} (x${item.count}) `)
      .join("\n")}\n Итого: ${amount} ${RUB}  \n ${deliveryData}`;

    const telegramResponse = await tgSender.sendMessage(message);

    if (telegramResponse) {
      router.push(ROUTS.MENU);
      dispatch(clearCart());
      Toast.show({
        type: "success",
        text1: "Ваш заказ принят!",
      });
    }

    setLoading(false);
  };

  return {
    cart,
    refresh,
    isDelivery,
    address,
    loading,
    amount,
    hasOrder: amount > 0,
    phone,
    animatedStyles,

    onRefresh,
    onAddressChange,
    onSubmit,
    onDelivery,
    onPhoneChange,
  };
};
