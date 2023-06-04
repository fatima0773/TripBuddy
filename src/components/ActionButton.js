import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export function ActionButton({ text, style, onPress }) {

  return (
      <TouchableHighlight
        underlayColor="#1F4B49"
        style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#25605C",
    width: "80%",
    height: 56,
    justifyContent: "center",
    borderRadius: 23,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
