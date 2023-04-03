import { IAdditional } from "../Home/useHome.control";

export interface IModalAdditionalProps {
  readonly show: boolean;
  readonly additional: IAdditional[];

  onCloseModal(): void;
  onSelectValue(): void;
}
