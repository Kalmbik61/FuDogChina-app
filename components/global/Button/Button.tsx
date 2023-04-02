import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IButtonProps } from "./Button.props";
import { stylesOf } from "classnames-rn";
import styles from "./Button.styles";

const cn = stylesOf(styles);

export default function Button({
  styles,
  primary,
  children,
  onPress,
}: IButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={cn("wrapper")}>
        <Text style={cn("text")}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
