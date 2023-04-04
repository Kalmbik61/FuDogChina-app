import { Image, ImageStyle, Text, TouchableOpacity, View } from "react-native";
import { ICartItemProps } from "./CartItem.props";
import { useCartItemControl } from "./useCartItem.control";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/Colors";
import { stylesOf } from "classnames-rn";
import styles from "./CartItem.styles";
import { RUB } from "../../../constants/Currency";

const cn = stylesOf(styles);

export default function CartItem(props: ICartItemProps) {
  const control = useCartItemControl(props);
  return (
    <View style={cn("container")}>
      <View style={cn("rowWrapper")}>
        <View style={cn("imageWrapper")}>
          <Image
            style={cn("image") as ImageStyle}
            source={{ uri: props.imgUrl }}
            resizeMode='cover'
          />
        </View>
        <View style={cn("orderWrapper")}>
          <Text style={cn("name")}>{props.name}</Text>
          <Text style={cn("price")}>
            {props.price} {RUB}
          </Text>
        </View>
        <View style={cn("countWrapper")}>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={20} color={COLORS.primary} />
          </TouchableOpacity>
          <View style={cn("countTextWrapper")}>
            <Text style={cn("count")}>{props.count}</Text>
          </View>
          <TouchableOpacity>
            <AntDesign name='pluscircleo' size={20} color={COLORS.ok} />
          </TouchableOpacity>
        </View>
      </View>
      {props.additional && (
        <View style={cn("additionalWrapper")}>
          <Text style={cn("additional")} numberOfLines={1}>
            {props.additional}
          </Text>
        </View>
      )}
    </View>
  );
}
