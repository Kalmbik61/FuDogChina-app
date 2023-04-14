import {
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IAdditional, IMeal } from "../Home/useHome.control";
import { IMealDetailProps } from "./MealDetail.props";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { getMealData } from "../../service/getMealData";
import { Alert } from "react-native";

interface IMealDetailsControl {
  readonly details?: IMeal;
  readonly loading: boolean;
  readonly selectedAdditional?: IAdditional;
  readonly bottomRef: MutableRefObject<BottomSheetModal | null>;

  onSelectedAdditional(i: number): void;
  addMeal(): void;
  onBottomHandler(index?: number): void;
}

export const useMealDetailsControl = (
  props: IMealDetailProps
): IMealDetailsControl => {
  const bottomRef = useRef<BottomSheetModal>(null);
  const dispatch = useDispatch();
  const { setOptions } = useNavigation();
  const [details, setDetails] = useState<IMeal>();
  const [loading, setLoading] = useState(true);
  const [selectedAdditional, setSelectedAdditional] = useState<
    IAdditional | undefined
  >();

  const getMealDetails = async () => {
    setLoading(true);
    const data = await getMealData(props.id);
    if (data instanceof Error) {
      Alert.alert("Ошибка сервера", "Попробуйте позже");
      return;
    }
    setDetails({
      id: props.id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      type: data.category,
      additional: data.additional,
      description: data.description,
    });
    setLoading(false);
  };

  useEffect(() => {
    getMealDetails();
  }, []);

  useLayoutEffect(() => {
    setOptions({ headerTitle: details?.name });
  }, [props.id, details]);

  const onSelectedAdditional = (i: number) => {
    if (!details || !details.additional) return;
    setSelectedAdditional(details.additional[i]);
  };

  useEffect(() => {
    if (!selectedAdditional) return;

    const t = setTimeout(() => bottomRef.current?.close(), 500);
    return () => clearTimeout(t);
  }, [selectedAdditional]);

  const addMeal = () => {
    if (!details) return;
    dispatch(
      addToCart({
        mealId: selectedAdditional
          ? details.id + selectedAdditional.additionalNameOption
          : details.id,
        name: details.name,
        imgUrl: details.imageUrl,
        count: 1,
        price: selectedAdditional?.additionalPriceOption || details.price,
        additional: selectedAdditional?.additionalNameOption,
      })
    );
  };

  const onBottomHandler = useCallback(() => {
    bottomRef.current?.present();
  }, []);

  return {
    details,
    loading,
    selectedAdditional,
    bottomRef,

    onSelectedAdditional,
    addMeal,
    onBottomHandler,
  };
};
