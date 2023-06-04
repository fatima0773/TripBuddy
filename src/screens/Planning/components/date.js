import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

const Date = ({date, day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  top: 70, left: 30 
    // marginTop:10,
    top: 30,
    left: 20,
    
  },
  date: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    // lineHeight: 30,
    color: '#A27B5C',
  },
  day: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#A27B5C',
  },
});

export default Date;
