import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ViewComponent } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
          }}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={12}
              color="red"
              style={{ alignSelf: "center", margin: 2 }}
            />
            <Text style={styles.text}>0.67%</Text>
          </View>
        </View>

        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
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
