import { View, Text, TouchableOpacity } from "react-native";
import { IRoundedTextProps } from "./RoundedText.props";
import { stylesOf } from "classnames-rn";
import styles from "./RoundedText.styles";

const cn = stylesOf(styles);

export default function RoundedText({
  children,
  label,
  style,

  onPress,
}: IRoundedTextProps) {
  return (
    <View style={[cn("textWrapper"), style]}>
      <Text style={cn("textLable")}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={cn("text")}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
