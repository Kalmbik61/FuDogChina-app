import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20,
  },
  imageWrapper: {
    overflow: "hidden",
    width: "100%",
    height: 200,
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: "50%",
    height: "100%",
    borderRadius: 4,
  },
  btn: {
    marginTop: 40,
    alignItems: "center",
  },
  btnContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnText: {
    color: "#fff",
  },
});

export default styles;
