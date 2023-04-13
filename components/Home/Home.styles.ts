import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  contentWrapper: {
    paddingVertical: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // flexWrap: "wrap",
    gap: 10,
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
