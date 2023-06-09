import React from "react";
import { Text, View } from "react-native";
import { IFilterProps } from "./Filter.props";
import styles from "./Filter.styles";
import { stylesOf } from "classnames-rn";
import { TouchableOpacity } from "react-native-gesture-handler";

const cn = stylesOf(styles);

export default function Filter({ children, active, onPress }: IFilterProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={cn("wrapper")}>
        <Text style={cn("text", { active })}>{children}</Text>
      </View>
      <View style={cn({ activeLine: active })} />
    </TouchableOpacity>
  );
}
