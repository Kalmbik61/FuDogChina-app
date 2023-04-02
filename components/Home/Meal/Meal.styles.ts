import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants/Colors";

const dW = Dimensions.get("window").width;

const checkWidth = () => {
  if (dW > 400) {
    return 180;
  } else if (dW < 400 && dW > 350) {
    return 150;
  }
  return "100%";
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 14,
    backgroundColor: COLORS.darkBg,
    width: checkWidth(),
    // shadowColor: "rgba(146, 136, 224, 0.3)",
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
  },

  imageWrapper: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  textWrapper: {
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  priceWrapper: {
    marginBottom: 10,
  },
  price: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default styles;
