import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  picker: {
    paddingHorizontal: 20,
    top: -30,
  },
  btn: {
    top: -20,
  },
});

export default styles;
