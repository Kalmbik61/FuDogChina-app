import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

const styles = StyleSheet.create({
  textWrapper: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  textLable: {
    fontSize: 14,
    fontWeight: "600",
    padding: 10,
    backgroundColor: COLORS.primary,
    color: "#fff",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    padding: 10,
  },
});

export default styles;
