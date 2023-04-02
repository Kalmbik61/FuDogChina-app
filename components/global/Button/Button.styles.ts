import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    shadowColor: "rgba(146, 136, 224, 0.3)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default styles;
