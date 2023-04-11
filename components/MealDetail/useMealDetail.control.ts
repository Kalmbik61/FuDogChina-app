import {
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IAdditional, IMeal, MOCK } from "../Home/useHome.control";
import { IMealDetailProps } from "./MealDetail.props";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

interface IMealDetailsControl {
  readonly details?: IMeal;
  readonly loading: boolean;
  readonly refresh: boolean;
  readonly selectedAdditional?: IAdditional;
  readonly bottomRef: MutableRefObject<BottomSheetModal | null>;

  onRefresh(): void;
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
  const [refresh, setRefresh] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    IAdditional | undefined
  >();

  const getMealDetails = () => {
    const meal = MOCK.find((m) => m.id === props.id);
    setDetails(meal);
  };

  useEffect(() => {
    //API
    getMealDetails();

    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  useLayoutEffect(() => {
    setOptions({ headerTitle: details?.name });
  }, [props.id, details]);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    // refetch();
    setRefresh(false);
  }, []);

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
          ? details.id + selectedAdditional.name
          : details.id,
        name: details.name,
        imgUrl: details.imageUrl,
        count: 1,
        price: selectedAdditional?.price || details.price,
        additional: selectedAdditional?.name,
      })
    );
  };

  const onBottomHandler = useCallback(() => {
    bottomRef.current?.present();
  }, []);

  return {
    details,
    loading,
    refresh,
    selectedAdditional,
    bottomRef,

    onRefresh,
    onSelectedAdditional,
    addMeal,
    onBottomHandler,
  };
};
