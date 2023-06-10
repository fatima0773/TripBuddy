import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
// import TimePicker from 'react-native-simple-time-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClockIcon = () => <Icon name="access-time" color="#25605C" size={37} />;

function InputField({ placeholder, clockk }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState({ selectedHours: 0, selectedMinutes: 0 });

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const renderIcon = () =>
    clockk && (
      <TextInput.Icon style={{ paddingTop: 5 }} icon={ClockIcon} onPress={() => setShowTimePicker(true)} />
    );

  const handleTimeChange = (time) => {
    const { selectedHours, selectedMinutes } = time;
    setTime(time);
    setText(`${selectedHours}:${selectedMinutes}`);
    setShowTimePicker(false); // Hide the time picker after selecting a time
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      {showTimePicker ? (
        // <TimePicker
        //   selectedHours={time.selectedHours}
        //   selectedMinutes={time.selectedMinutes}
        //   onChange={handleTimeChange}
        // /> 
        null
      ) : (
        <TextInput
          mode="outlined"
          placeholder={placeholder}
          outlineColor="#353535"
          activeOutlineColor="#25605C"
          textColor="#353535"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          outlineStyle={{
            borderRadius: 22,
            borderWidth: isFocused ? 2 : 0.5,
          }}
          onBlur={handleBlur}
          onFocus={handleFocus}
          left={renderIcon()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    paddingBottom: 1,
    color: '#25605C',
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: 'white',
    height: 70,
    fontSize: 25,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'right', // Add this line
  },
  
});

export default InputField;
