import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {},

  errorWrapper: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  errorImageContainer: {
    borderRadius: 8,
    width: 200,
    height: 200,
    overflow: "hidden",
  },
  errorImage: {
    width: "100%",
    height: "100%",
  },
  error: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },

  container: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  imageWrapper: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  nameWrapper: {},
  name: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: "600",
  },
  descriptionWrapper: {
    marginVertical: 10,
  },
  description: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },
  priceWrapper: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  price: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
