import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IButtonProps } from "./Button.props";

export default function Button({
  styles,
  primary,
  children,
  onPress,
}: IButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
