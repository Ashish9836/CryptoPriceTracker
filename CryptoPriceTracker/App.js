import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewComponent,
  FlatList,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import cryptocurrencies from "./assets/data/cryptocurrencies.json";
import CoinItem from "./src/components/CoinItem/index";
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
});
