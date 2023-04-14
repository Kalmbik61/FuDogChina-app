import { Platform, RefreshControl } from "react-native";
import React from "react";
import { ICustomRefreshControlProps } from "./CustomRefreshControl.props";
import { COLORS } from "../../../constants/Colors";

export default function CustomRefreshControl({
  refresh,
  onRefresh,
}: ICustomRefreshControlProps) {
  const isAdnroid = Platform.OS === "android";
  return isAdnroid ? undefined : (
    <RefreshControl
      refreshing={refresh}
      onRefresh={onRefresh}
      size={24}
      colors={[COLORS.primary]}
      tintColor={COLORS.primary}
    />
  );
}
