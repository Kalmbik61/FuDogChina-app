import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  contentWrapper: {
    paddingVertical: 10,
    gap: 10,
    justifyContent: "space-between",
  },
  emptyWrapper: {
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  emptyText: {
    color: COLORS.linghtGrey,
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
