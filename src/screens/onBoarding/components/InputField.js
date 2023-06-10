import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function InputField({ placeholder, text, style, secureTextEntry, onChangeText, onBlur}) {
  const [inputText, setInputText] = useState(text);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#353535"
      outlineColor="#353535"
      activeOutlineColor="#25605C"
      textColor="#353535"
      value={text}
      outlineStyle={{ borderRadius: 27, borderWidth: 0.5, borderWidth: isFocused ? 2 : 0.5}}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#353535',
    borderColor: '#353535',
    borderWidth: 0.5,
    paddingLeft: 32,
    borderRadius: 23,
    fontSize: 17,
    height: 44,
    width: "80%",
    alignSelf: 'center',
    fontWeight: 'normal',
  }
});
