import React from "react";
import { Text, View } from "react-native";
import { InputField } from "../Planning/components/InputField";
import { ActionButton } from "../../components/ActionButton";

const LoginScreen = () => {
  return (
    <View style={{backgroundColor:"white"}}>
      <Text>App.js</Text>
      <InputField placeholder="Enter name" text=""/>
      <Text>App.js</Text>
      <InputField placeholder="" text="Eesha"/>
      {/* <ActionButton text="Sign In Guys"/> */}
    </View>
  )

}

/*
textcolor
bordercolor
borderwidth

*/
export default LoginScreen;