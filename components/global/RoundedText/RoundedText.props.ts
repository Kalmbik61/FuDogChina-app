import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface IRoundedTextProps {
  readonly label: string;
  readonly children: ReactNode;
  readonly style?: ViewStyle;

  onPress?(): void;
}
