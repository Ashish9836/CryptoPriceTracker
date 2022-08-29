import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Profile from './Components/Profile';
const App = () => {
  const data = [
    { name: 'Jack Jonnas' },
    { name: 'Bharti Airtel' },
    { name: 'Pickachoo!' },
  ];
  return (
    <>
      <View>
        <Text>Hello Guys!</Text>
      </View>
      <View>
          <FlatList
            horizontal
            data={data}
            renderItem={(e) => {
              return <Text style={[mystyle.TextRed,mystyle.MarginCustom]}>{e.item.name}</Text>;
            }}
          />
          <View>
          <Profile name="Ashish Kumar" subscription="Gold User"/>
          </View>
      </View>
    </>
  );
};
const mystyle = StyleSheet.create({
  TextRed: {
    color: 'red',
  },
  MarginCustom: {
    margin: 20
  },
});

export default App;
