import { ScrollView, FlatList, View, RefreshControl } from "react-native";
import { useCartControl } from "./CartItem/useCart.control";
import CartItem from "./CartItem/CartItem";
import { COLORS } from "../../constants/Colors";

export default function Cart() {
  const control = useCartControl();

  return (
    <ScrollView
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
      {/* <FlatList
        data={control.order}
        keyExtractor={(item) => item.mealId}
        renderItem={({ item }) => />}
      /> */}
      {control.order.map((item) => (
        <CartItem {...item} key={item.mealId} />
      ))}
    </ScrollView>
  );
}
