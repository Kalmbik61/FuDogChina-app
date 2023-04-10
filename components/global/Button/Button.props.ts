import { ReactNode } from "react";
import { FlexStyle } from "react-native";

export interface IButtonProps {
  readonly primary?: boolean;
  readonly styles?: FlexStyle;
  readonly children: ReactNode;
  readonly loading?: boolean;
  readonly green?: boolean;
  readonly disabled?: boolean;

  onPress(): void;
}
