import React, { Children } from "react";
import { IBottomSheetProps } from "./BottomSheet.props";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useBottomSheetControl } from "./useBottomSheet.control";
import { stylesOf } from "classnames-rn";
import styles from "./BottomSheet.styles";
import { COLORS } from "../../../constants/Colors";

const cn = stylesOf(styles);

export default function BottomSheet({ ...props }: IBottomSheetProps) {
  const control = useBottomSheetControl(props);
  return (
    <BottomSheetModal
      ref={control.ref}
      index={1}
      snapPoints={control.snapPoints}
      onChange={control.handleSheetChanges}
      backgroundStyle={{ backgroundColor: COLORS.primary }}
    >
      <BottomSheetView style={cn("wrapper")}>{props.children}</BottomSheetView>
    </BottomSheetModal>
  );
}
