import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { IMeal, MOCK } from "../Home/useHome.control";
import { IMealDetailProps } from "./MealDetail.props";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";

interface IMealDetailsControl {
  readonly details?: IMeal;
  readonly loading: boolean;
  readonly refresh: boolean;
  readonly selectedAdditional?: { [key: string]: number };
  readonly modalShow: boolean;

  onRefresh(): void;
  onSelectedAdditional(a: string, i: number): void;
  onModalHandler(s: boolean): void;
  addMeal(): void;
}

export const useMealDetailsControl = (
  props: IMealDetailProps
): IMealDetailsControl => {
  const dispatch = useDispatch();
  const { setOptions } = useNavigation();
  const [details, setDetails] = useState<IMeal>();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    { [key: string]: number } | undefined
  >();
  const [modalShow, setModalShow] = useState<boolean>(false);

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

  const onSelectedAdditional = (a: string, i: number) => {
    if (!details || !details.additional) return;

    setSelectedAdditional(details.additional[i]);
  };

  const onModalHandler = (s: boolean) => {
    setModalShow(s);
  };

  const addMeal = () => {
    if (!details) return;
    dispatch(
      addToCart({
        mealId: details.id,
        name: details.name,
        imgUrl: details.imageUrl,
        count: 1,
        price: details.price,
      })
    );
  };

  return {
    details,
    loading,
    refresh,
    selectedAdditional,
    modalShow,

    onRefresh,
    onSelectedAdditional,
    onModalHandler,
    addMeal,
  };
};
