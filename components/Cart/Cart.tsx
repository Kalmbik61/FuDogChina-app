import {
  ScrollView,
  Text,
  View,
  RefreshControl,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useCartControl } from "./useCart.control";
import CartItem from "./CartItem/CartItem";
import { COLORS } from "../../constants/Colors";
import { stylesOf } from "classnames-rn";
import styles from "./Cart.styles";
import Button from "../global/Button/Button";
import { RUB } from "../../constants/Currency";
import { Link } from "expo-router";
import { ROUTS } from "../../utils/routesNames";

const cn = stylesOf(styles);

export default function Cart() {
  const control = useCartControl();

  return (
    <View style={cn("wrapper")}>
      {control.cart.order.length > 0 ? (
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
      ) : (
        <Text style={{ color: COLORS.linghtGrey }}>Ваша корзина пуста</Text>
      )}

      {!control.hasOrder && (
        <View style={cn("linkWrapper")}>
          <Link href={ROUTS.MENU}>
            <Text style={cn("link")}>Меню</Text>
          </Link>
        </View>
      )}

      {control.hasOrder && (
        <>
          <View style={cn("addressWrapper")}>
            <Text style={cn("addressText")}>Доставка</Text>
            <TextInput
              style={cn("address")}
              placeholderTextColor={COLORS.linghtGrey}
              placeholder='Ведите адрес доставки'
              value={control.address}
              onChangeText={(v) => control.onAddressChange(v)}
            />
          </View>
          <View style={cn("amountWrapper")}>
            <Text style={cn("amountTitle")}>Итого:</Text>
            <Text style={cn("amount")}>
              {control.amount} {RUB}
            </Text>
          </View>
        </>
      )}

      {control.hasOrder && (
        <Button onPress={control.onSubmit} loading={control.loading} primary>
          Заказать
        </Button>
      )}
    </View>
  );
}
