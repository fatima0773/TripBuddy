import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function ActionButton({ text, navigation, screenName}) {
  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    
      <TouchableHighlight
        onPress={handlePress}
        underlayColor="#1F4B49"
        style={[style.button, style]}
      >
        <Text style={style.text}>{text}</Text>
      </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#25605C",
    width: "80%",
    height: 56,
    justifyContent: "center",
    borderRadius: 23,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
  },
});
