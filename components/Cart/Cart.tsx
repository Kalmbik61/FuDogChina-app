import {
  ScrollView,
  Text,
  View,
  RefreshControl,
  TextInput,
} from "react-native";
import { useCartControl } from "./useCart.control";
import CartItem from "./CartItem/CartItem";
import { COLORS } from "../../constants/Colors";
import { stylesOf } from "classnames-rn";
import styles from "./Cart.styles";
import Button from "../global/Button/Button";
import { RUB } from "../../constants/Currency";

const cn = stylesOf(styles);

export default function Cart() {
  const control = useCartControl();

  return (
    <View style={cn("wrapper")}>
      <ScrollView
        contentContainerStyle={cn("scrollContainer")}
        refreshControl={
          <RefreshControl
            refreshing={control.refresh}
            onRefresh={control.onRefresh}
            size={24}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      >
        {control.cart.order.map((item) => (
          <CartItem {...item} key={item.mealId} />
        ))}
      </ScrollView>

      <View style={cn("addressWrapper")}>
        <Text style={cn("addressText")}>Доставка</Text>
        <TextInput
          style={cn("address")}
          placeholderTextColor={COLORS.linghtGrey}
          placeholder='Ведите адрес доставки'
        />
      </View>
      <View style={cn("amountWrapper")}>
        <Text style={cn("amountTitle")}>Итого:</Text>
        <Text style={cn("amount")}>
          {control.cart.amount} {RUB}
        </Text>
      </View>

      <Button onPress={() => {}} primary>
        Заказать
      </Button>
    </View>
  );
}
