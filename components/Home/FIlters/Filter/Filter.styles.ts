import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: { marginRight: 30 },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
  },
  active: {
    color: COLORS.primary,
  },
  activeLine: {
    width: "30%",
    height: 2,
    backgroundColor: COLORS.primary,
    marginTop: 5,
  },
});

export default styles;
