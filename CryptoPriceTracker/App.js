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
import CoinItem from "./src/components/CoinItem/index";
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen/";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <CoinDetailedScreen/>
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
