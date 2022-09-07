import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tickerTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rankContainer: {
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  name: {
    color: "white",
    fontSize: 15,
  },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
});
export default styles;
