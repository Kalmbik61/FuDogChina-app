import { TouchableOpacity, View, Text } from "react-native";
import { ICartIconProps } from "./CartIcon.props";
import { Link } from "expo-router";
import { ROUTS } from "../../../utils/routesNames";
import { AntDesign } from "@expo/vector-icons";
import { stylesOf } from "classnames-rn";
import styles from "./CartIcon.styles";

const cn = stylesOf(styles);

export default function CartIcon({ number, color }: ICartIconProps) {
  return (
    <Link href={ROUTS.CART} asChild>
      <TouchableOpacity>
        <View style={cn("wrapper")}>
          <AntDesign
            name='shoppingcart'
            size={24}
            color={color}
            style={{ marginRight: 20 }}
          />
        </View>
        {number && (
          <View style={cn("numberWrapper")}>
            <Text style={cn("number")}>{number}</Text>
          </View>
        )}
      </TouchableOpacity>
    </Link>
  );
}
