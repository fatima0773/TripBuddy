import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Input from './components/Input.js';
import Date from './components/date.js';
import  ActionButton  from '../../components/ActionButton.js';
import Input from './components/InputField.js';

import InputField from './components/time.js';
const AddNewTask = ({ navigation }) => {
    return (
      <View style={styles.container}>

       <TouchableOpacity
      style={{ top: 10, left: 10 }}
      onPress={() => navigation.goBack()}>
    
      <Icon name="chevron-left" size={40} color="#25605C" />      
    </TouchableOpacity>
    <Date date="12" day="Monday" />

    <Text style={styles.heading}>New Task</Text>
    <Input placeholder="Add task title" isLarge={false}/>
    <Input placeholder="Add task title" isLarge={true} name={"optional"}/>
    <InputField placeholder="12:00PM" clockk={true}/>
    <ActionButton text="Savee"/>

    
    </View>
    
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor:"white",

  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    // marginBottom: 16,
    marginTop: 40,
    left: 22,
    color: "#274B47",
    // marginTop:10,
  },
});

export default AddNewTask;