import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { IButtonProps } from "./Button.props";
import { stylesOf } from "classnames-rn";
import styles from "./Button.styles";
import { COLORS } from "../../../constants/Colors";

const cn = stylesOf(styles);

export default function Button({
  styles,
  primary,
  children,
  loading,

  onPress,
}: IButtonProps) {
  return (
    <TouchableOpacity onPress={!loading ? onPress : undefined}>
      <View style={cn("wrapper")}>
        {loading ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={cn("text")}>{children}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
