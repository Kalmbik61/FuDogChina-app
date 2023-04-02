import { ReactNode } from "react";

export interface IButtonProps {
  readonly primary?: boolean;
  readonly styles?: string;
  readonly children: ReactNode;

  onPress(): void;
}
