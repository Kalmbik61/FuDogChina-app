import { ReactNode } from "react";

export interface IBottomSheetProps {
  readonly children: ReactNode;
  readonly open: boolean;

  onChange(index: number): void;
}
