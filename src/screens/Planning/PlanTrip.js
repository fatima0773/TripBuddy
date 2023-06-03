import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Input from './components/Input.js';

import  ActionButton  from '../../components/ActionButton.js';
import InputField from '../../components/InputField.js';
function New_Trip(){
    return(
        <View> 
    <TouchableOpacity
      style={{ position: 'absolute', top: 20, left: 20 }}
      onPress={() => navigation.goBack()}>

      <Icon name="chevron-left" size={40} color="#25605C" />
      
      
    </TouchableOpacity>

    <View style={styles.container}>

    <InputField placeholder="Trip Title" name={"Title"}/>
    <InputField placeholder="Enter your currrent location" name={"Your Location"} pin="pin"
    />
      <InputField placeholder="Enter your Destination location" name={"Destination Location"} pin="pin"
    />
    <InputField placeholder="10/10/2023" name={"Check-in"} calender/>
    <InputField placeholder="10/10/2023" name={"Check-out"} calender/>
    <ActionButton text="Add New Task"/>
    </View>





</View>
    );
}

const styles = StyleSheet.create({
    container: {

    marginTop: 100,
    },
    header: {
        alignSelf:'center',
        fontSize: 30,
        color: '#25605C',
        fontWeight: 'bold',
    },
   
});


export default New_Trip;
