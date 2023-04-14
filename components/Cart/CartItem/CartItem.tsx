import { Image, ImageStyle, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ICartItemProps } from "./CartItem.props";
import { useCartItemControl } from "./useCartItem.control";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/Colors";
import { stylesOf } from "classnames-rn";
import styles from "./CartItem.styles";
import { RUB } from "../../../constants/Currency";
import { TouchableOpacity } from "react-native-gesture-handler";

const cn = stylesOf(styles);

export default function CartItem(props: ICartItemProps) {
  const control = useCartItemControl(props);
  return (
    <Swipeable
      renderRightActions={() => (
        <View style={cn("swipeDelete")}>
          <Text style={cn("swipeDelteText")}>Удалить</Text>
        </View>
      )}
      onSwipeableRightOpen={control.onDeleteMeal}
    >
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
            <TouchableOpacity onPress={control.minusMealCount}>
              <AntDesign name='minuscircleo' size={20} color={COLORS.primary} />
            </TouchableOpacity>
            <View style={cn("countTextWrapper")}>
              <Text style={cn("count")}>{props.count}</Text>
            </View>
            <TouchableOpacity onPress={control.plusMealCount}>
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
    </Swipeable>
  );
}
