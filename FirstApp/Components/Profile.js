import React from "react";
import { View, Image, Text } from "react-native";

const Profile = (props) => {
  const image_location = props.image;
  const name_profile = `Name:  ${props.name}`;
  const subscription_profile = `Subscription: ${props.subscription}`;
  return (
    <>
      <View style={mystyle.profileBox}>
        <Image source={require("../Images/man.png")} style={mystyle.imgStyle}/>
        <Text>Profile Section</Text>
        <Text>{name_profile}</Text>
        <Text>{subscription_profile}</Text>
      </View>
    </>
  );
};
const mystyle = {
  imgStyle: {
    width: 80,
    height: 80,
  },
  profileBox:{
    width:180,
    height:200,
    padding:10,
    borderWidth:"2px",
    borderRadius:"1rem",
    borderColor:"red"
  },
  TextCenter:{
textAlign:"center"
  }
};
export default Profile;
