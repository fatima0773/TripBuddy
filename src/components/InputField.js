import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function InputField({ placeholder, text }) {
  const [inputText, setInputText] = useState(text);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholder={placeholder}
      placeholderTextColor="#353535"
      value={inputText}
      mode="outlined"
      onChangeText={newText => setInputText(newText)}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
    fontSize: 16,
    height: 44,
    width: 307,
    alignSelf: 'center',
    fontWeight: 'normal',
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: '#25605C',
    fontWeight: 'bold',
    color: '#25605C',
  },
});
