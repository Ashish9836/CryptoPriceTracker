import React from "react";
import { View, Image, Text } from "react-native";

const Profile = (props) => {
  const image_location = props.image;
  const name_profile = `Name:  ${props.name}`;
  const subscription_profile = `Subscription: ${props.subscription}`;
  return (
    <>
      <View style={mystyle.profileBox}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BetQecEPZPH1770yc9Wtm2_yr90fGe1S0JkPrDXLnA&s"}} style={mystyle.imgStyle}/>
        </View>
        <Text>Profile Section</Text>
        <Text>{name_profile}</Text>
        <Text>{subscription_profile}</Text>
      </View>
    </>
  );
};
const mystyle = {
  imgStyle: {
    width: 100,
    height: 80,
  },
  profileBox:{
    width:220,
    height:200,
    padding:10,
    borderWidth:"2px",
    borderRadius:15,
    borderColor:"red"
  },
  TextCenter:{
textAlign:"center"
  }
};
export default Profile;
