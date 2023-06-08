import React, { useState } from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function InputField({ placeholder, name, pin, calender , isLarge}) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // inputStyles = `styles.${isLarge ? 'textInputLarge' : 'textInputSmall'}`
  const inputStyles = isLarge ? styles.textInputLarge : styles.textInputSmall;

  // console.log(inputStyles)

  const renderIcon = () => {
    if (pin) {
      return (
        <TextInput.Icon
          style={{ paddingTop: 5 }}
          icon={() => (
            <Icon name="push-pin" color="#353535" size={20} />
          )}
        />
      );
    }
    return null;
  };
  const renderCalender = () => {  
    if (calender) {
      return (
        <TextInput.Icon
          style={{ paddingTop: 5 }}
          icon={() => (
            <Icon name="calendar-today" color="#353535" size={30} />
          )}
        />
      );
    }
    return null;
  };


  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={styles.label}>{name} </Text>

      <TextInput
  mode="outlined"
  placeholder={placeholder}
  outlineColor="#353535"
  activeOutlineColor="#25605C"
  textColor="#353535"
  value={text}
  onChangeText={text => setText(text)}
  style={inputStyles}
  multiline={isLarge}
  numberOfLines={isLarge ? 4 : 1}

  outlineStyle={{
    borderRadius: 27,
    borderWidth: isFocused ? 2 : 0.5,
  }}
  onBlur={handleBlur}
  onFocus={handleFocus}
  left={renderIcon()}
  right={renderCalender()} // Corrected spelling of "right"
/>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    fontSize: 12,
    paddingBottom: 1,
    color: '#25605C',
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: 'bold',
  },

  textInputSmall: {
    marginBottom: 10,
    backgroundColor: 'white',
    height: 50,
    fontSize: 18,
    // marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  textInputLarge: {
    marginBottom: 10,
    backgroundColor: 'white',
    height: 150,
    fontSize: 18,
    // marginBottom: 20,
    textAlignVertical: 'top',
    width: '80%',
    alignSelf: 'center',
    // alignItems: 'flex-start',
    textAlign:'left',


    
  },
});
