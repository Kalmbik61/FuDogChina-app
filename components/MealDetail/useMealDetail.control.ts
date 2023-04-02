import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { IMeal, MOCK } from "../Home/useHome.control";
import { IMealDetailProps } from "./MealDetail.props";
import { useNavigation, useRouter } from "expo-router";
import { ROUTS } from "../../utils/routesNames";

interface IMealDetailsControl {
  readonly details?: IMeal;
  readonly loading: boolean;
  readonly refresh: boolean;
  readonly selectedAdditional?: { [key: string]: number };

  onRefresh(): void;
  onSelectedAdditional(a: string, i: number): void;
  toSelectAddtionalModal(): void;
}

export const useMealDetailsControl = (
  props: IMealDetailProps
): IMealDetailsControl => {
  const router = useRouter();
  const { setOptions } = useNavigation();
  const [details, setDetails] = useState<IMeal>();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    { [key: string]: number } | undefined
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

  const onSelectedAdditional = (a: string, i: number) => {
    if (!details || !details.additional) return;

    setSelectedAdditional(details.additional[i]);
  };

  const toSelectAddtionalModal = () => {
    router.push(ROUTS.ADDITIONAL_MODAL_PICKER);
  };

  return {
    details,
    loading,
    refresh,
    selectedAdditional,

    onRefresh,
    onSelectedAdditional,
    toSelectAddtionalModal,
  };
};
