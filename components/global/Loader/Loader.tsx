import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../../constants/Colors";
import { stylesOf } from "classnames-rn";
import styles from "./Loader.styles";
import { ILoaderProps } from "./Loader.props";

const cn = stylesOf(styles);

export default function Loader({ styles, size = 25 }: ILoaderProps) {
  return (
    <View style={[cn("wrapper"), styles]}>
      <ActivityIndicator color={COLORS.primary} size={size} />
    </View>
  );
}
