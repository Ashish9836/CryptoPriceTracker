import { Text, View, Image, ViewComponent } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;
  const priceColor = price_change_percentage_24h < 0 ? "#f87171" : "#00d09c";
  const beautifyMarketCap = (market_cap) => {
    market_cap = Number(market_cap);
    if (market_cap > 1000000000000) {
      return `${Math.floor(market_cap / 1000000000000)} T`;
    }
    if (market_cap > 1000000000) {
      return `${Math.floor(market_cap / 1000000000)} B`;
    }
    if (market_cap > 1000000) {
      return `${Math.floor(market_cap / 1000000)} M`;
    }
    if (market_cap > 1000) {
      return `${Math.floor(market_cap / 1000)} K`;
    }
    return `${market_cap}`;
  };
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={(price_change_percentage_24h<0)?"caretdown":"caretup"}
            size={12}
            color={priceColor}
            style={{ alignSelf: "center", margin: 2 }}
          />
          <Text style={styles.text}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>${current_price}</Text>
        <Text style={styles.text}>
          MarketCap {beautifyMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
