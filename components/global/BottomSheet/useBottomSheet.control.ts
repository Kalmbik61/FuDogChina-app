import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IBottomSheetProps } from "./BottomSheet.props";

interface IBottomSheetControl {
  readonly ref: MutableRefObject<BottomSheetModal | null>;
  readonly snapPoints: string[];

  handlePresentModalPress(): void;
  handleSheetChanges(i: number): void;
}

export const useBottomSheetControl = (
  props: IBottomSheetProps
): IBottomSheetControl => {
  const ref = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handlePresentModalPress = useCallback(() => {
    ref.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    props.onChange(index);
  }, []);

  useEffect(() => {
    if (props.open) {
      handlePresentModalPress();
    }
  }, [props.open]);

  return {
    ref,
    snapPoints,

    handlePresentModalPress,
    handleSheetChanges,
  };
};
