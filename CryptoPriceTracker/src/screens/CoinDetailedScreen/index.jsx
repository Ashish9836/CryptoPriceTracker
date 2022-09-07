import React from "react";
import { View, Text, Image } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import CoinDetailedHeader from "./components/CoinDetailedHeader";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;
  const priceColor = price_change_percentage_24h < 0 ? "#f87171" : "#00d09c";
  return (
    <View>
      <CoinDetailedHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={{
            backgroundColor: priceColor,
            paddingHorizontal: 3,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h?.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CoinDetailedScreen;
