import { Text, View } from "react-native";
import { ICartItemProps } from "./CartItem.props";
import { useCartItemControl } from "./useCartItem.control";

export default function CartItem(props: ICartItemProps) {
  const control = useCartItemControl(props);
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}
