import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    title: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 3,
    },
    text: {
      color: "#cbd5e1",
      margin:3
   
    },
    coinContainer: {
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "gray",
      padding: 15,
    },
    rank: {
      fontWeight: "bold",
      color: "white",
      textAlign:"center"
    },
    rankContainer: {
      backgroundColor: "#585858",
      borderRadius: 5,
      paddingHorizontal: 5,
    },
  });
  export default styles;