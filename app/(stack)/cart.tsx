import { SafeAreaView } from "react-native";
import Cart from "../../components/Cart/Cart";
import { COLORS } from "../../constants/Colors";

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBg }}>
      <Cart />
    </SafeAreaView>
  );
}
