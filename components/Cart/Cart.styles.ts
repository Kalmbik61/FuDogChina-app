import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
  },
  scrollContainer: {
    gap: 20,
  },
  linkWrapper: {
    marginTop: 100,
  },
  link: {
    color: COLORS.primary,
    textAlign: "center",
  },

  addressWrapper: { gap: 10 },
  addressText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  address: {
    padding: 10,
    color: "#fff",
    borderRadius: 8,
    backgroundColor: COLORS.mainBg,
  },

  amountWrapper: {
    marginVertical: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: COLORS.linghtGrey,
    borderTopWidth: 1,
    borderBottomColor: COLORS.linghtGrey,
    borderBottomWidth: 1,
  },
  amountTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: COLORS.linghtGrey,
  },
  amount: { fontSize: 22, fontWeight: "600", color: COLORS.ok },
});

export default styles;
