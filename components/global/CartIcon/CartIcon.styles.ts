import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  numberWrapper: {
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 8,
    backgroundColor: COLORS.ok,
    width: 24,
    position: "absolute",
    right: 5,
    top: -10,
  },
  number: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default styles;
