import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  androidWrapper: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  androidNumberWrapper: {
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 9,
    backgroundColor: COLORS.ok,
    width: 24,
    left: -20,
  },
  numberWrapper: {
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 9,
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
