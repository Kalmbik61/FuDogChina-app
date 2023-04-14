import { View, Text, Platform } from "react-native";
import { ICartIconProps } from "./CartIcon.props";
import { Link } from "expo-router";
import { ROUTS } from "../../../utils/routesNames";
import { AntDesign } from "@expo/vector-icons";
import { stylesOf } from "classnames-rn";
import styles from "./CartIcon.styles";
import { useCartControl } from "../../Cart/useCart.control";
import { TouchableOpacity } from "react-native-gesture-handler";

const cn = stylesOf(styles);

const isAndroid = Platform.OS === "android";

export default function CartIcon({ color }: ICartIconProps) {
  const { cart } = useCartControl();

  return (
    <Link href={ROUTS.CART} asChild>
      <TouchableOpacity>
        <View style={cn(isAndroid ? "androidWrapper" : "wrapper")}>
          <AntDesign
            name='shoppingcart'
            size={24}
            color={color}
            style={{ marginRight: 20 }}
          />
          {cart.order.length > 0 && (
            <View
              style={cn(isAndroid ? "androidNumberWrapper" : "numberWrapper")}
            >
              <Text style={cn("number")}>{cart.order.length}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
}
