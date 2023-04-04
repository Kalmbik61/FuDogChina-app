import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    // shadowColor: COLORS.linghtGrey,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.6,
    // shadowRadius: 10,
    // elevation: 12,
    position: "relative",
  },
  rowWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  orderWrapper: {
    gap: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  price: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: "600",
  },

  countWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
  countTextWrapper: {
    backgroundColor: COLORS.mainBg,
    borderRadius: 4,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  count: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  additionalWrapper: {
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: COLORS.mainBg,
    padding: 10,
  },
  additional: {
    color: "#fff",
  },
});

export default styles;
