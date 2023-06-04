import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Search = ({ placeHolder }) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const styles = StyleSheet.create({
    textInput: {
      marginBottom: 10,
      backgroundColor: 'white',
      height: 50,
      fontSize: 18,
      marginBottom: 20,
      
    },
  });

  return (
    <View>
      <TextInput
        mode="outlined"
        placeholder={placeHolder}
        outlineColor="#353535"
        activeOutlineColor="#25605C"
        textColor="#353535"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
        outlineStyle={{ borderRadius: 27, borderWidth: 0.5, borderWidth: isFocused ? 2 : 0.5}}
        onFocus={handleFocus}
        onBlur={handleBlur}
        right={
          <TextInput.Icon
            style={{ paddingTop: 5 }}
            icon={({ color, size }) => (
              <TouchableOpacity>
                <MaterialIcons name="search" color={color} size={size} />
              </TouchableOpacity>
            )}
          />
        }
      />
    </View>
  );
};

export default Search;
