import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export function ActionButton({ text, navigation, screenName }) {
  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.container}>
      <TouchableHighlight
        onPress={handlePress}
        underlayColor="#1F4B49"
        style={style.button}
      >
        <Text style={style.text}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#25605C",
    width: 302,
    height: 56,
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
