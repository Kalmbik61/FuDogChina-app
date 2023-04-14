import {
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
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
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import CustomRefreshControl from "../global/CustomRefreshControl/CustomRefreshControl";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const cn = stylesOf(styles);

export default function Cart() {
  const control = useCartControl();

  return (
    <>
      <View style={cn("wrapper")}>
        {control.cart.order.length > 0 ? (
          <ScrollView
            contentContainerStyle={cn("scrollContainer")}
            refreshControl={CustomRefreshControl({
              refresh: control.refresh,
              onRefresh: control.onRefresh,
            })}
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
            <Animated.View
              style={[cn("addressWrapper"), control.animatedStyles]}
            >
              <View style={cn("addressTitleWrapper")}>
                <Text style={cn("addressText")}>Доставка</Text>
                <Pressable style={cn("checkbox")} onPress={control.onDelivery}>
                  <AnimatedCheckbox
                    checked={control.isDelivery}
                    highlightColor={COLORS.linghtGrey}
                    checkmarkColor={COLORS.primary}
                    boxOutlineColor={COLORS.primary}
                  />
                </Pressable>
              </View>
              <View style={cn("bottomWrapper")}>
                <TextInput
                  style={cn("inputText")}
                  placeholderTextColor={COLORS.darkBg}
                  placeholder='Ведите адрес доставки'
                  value={control.address}
                  onChangeText={(v) => control.onAddressChange(v)}
                />
                <TextInput
                  style={cn("inputText")}
                  placeholderTextColor={COLORS.darkBg}
                  placeholder='Ведите ваш номер'
                  value={control.phone}
                  onChangeText={(v) => control.onPhoneChange(v)}
                />
              </View>
            </Animated.View>
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
    </>
  );
}
