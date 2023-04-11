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
  readonly snapPoints: string[];
}

export const useBottomSheetControl = (
  props: IBottomSheetProps
): IBottomSheetControl => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  return {
    snapPoints,
  };
};
