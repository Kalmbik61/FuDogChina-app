import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { IAdditional, IMeal, MOCK } from "../Home/useHome.control";
import { IMealDetailProps } from "./MealDetail.props";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";

interface IMealDetailsControl {
  readonly details?: IMeal;
  readonly loading: boolean;
  readonly refresh: boolean;
  readonly selectedAdditional?: IAdditional;
  readonly modalShow: boolean;
  readonly openBottom: boolean;

  onRefresh(): void;
  onSelectedAdditional(i: number): void;
  onModalHandler(s: boolean): void;
  addMeal(): void;
  onBottomHandler(index?: number): void;
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
    IAdditional | undefined
  >();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [openBottom, setOpenBottom] = useState<boolean>(false);

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
    setOpenBottom(false);
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
        price: selectedAdditional?.price || details.price,
        additional: selectedAdditional?.name,
      })
    );
  };

  const onBottomHandler = useCallback(
    (index: number) => {
      console.log(index);
      if (index) {
        setOpenBottom(false);
      } else {
        setOpenBottom(true);
      }
    },
    [openBottom]
  );

  return {
    details,
    loading,
    refresh,
    selectedAdditional,
    modalShow,
    openBottom,

    onRefresh,
    onSelectedAdditional,
    onModalHandler,
    addMeal,
    onBottomHandler,
  };
};
