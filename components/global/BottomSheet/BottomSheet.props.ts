import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { MutableRefObject, ReactNode } from "react";

export interface IBottomSheetProps {
  readonly children: ReactNode;
  readonly controlerRef: MutableRefObject<BottomSheetModal | null>;
}
