import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Profile from "./components/Profile";
const App = () => {
  const [touchObj, SetTouchObj] = useState({
    text: "Touch Me",
    color: "green",
  });
  function ManageTouchObj() {
    if (touchObj.color == "green") {
      SetTouchObj({ color: "gray", text: "Touched!!" });
    } else {
      SetTouchObj({ color: "green", text: "Touch Me" });
    }
  }
  const data = [
    { name: "Jack Jonnas" },
    { name: "Bharti Airtel" },
    { name: "Pickachoo!" },
  ];
  const mystyle = StyleSheet.create({
    TextRed: {
      color: "red",
    },
    TouchTextStyle: {
      color: touchObj.color,
    },
    FontTen: {
      fontSize: 22,
    },
    MarginCustom: {
      margin: 20,
    },
    ProfileContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  });
  return (
    <>
      <View style={{ padding: 25 }}>
        <FlatList
          horizontal
          data={data}
          renderItem={(e) => {
            return (
              <Text style={[mystyle.TextRed, mystyle.MarginCustom]}>
                {e.item.name}
              </Text>
            );
          }}
        />
      </View>
      <Button title="Press Me" onPress={() => console.log("Hello!!")} />
      <TouchableOpacity onPress={ManageTouchObj}>
        <Text
          style={[
            mystyle.MarginCustom,
            mystyle.TouchTextStyle,
            mystyle.FontTen,
          ]}
        >
          {touchObj.text}
        </Text>
      </TouchableOpacity>
      <View style={mystyle.ProfileContainer}>
        <Profile name="Ashish" subscription="Gold member" />
      </View>
    </>
  );
};

export default App;
