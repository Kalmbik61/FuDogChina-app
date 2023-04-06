import { SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import Cart from "../../components/Cart/Cart";
import { COLORS } from "../../constants/Colors";

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBg }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Cart />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
