import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Facility = ({icon, facility}) => {
  const styles = StyleSheet.create({
    facility: {
      alignItems: 'center',
    },
    facilityName: {
      fontSize: 16,
      color: '#353535',
      fontWeight: '200',
    },
    facilityIcon: {
      padding: 10,
      backgroundColor: '#E4E4E4',
      opacity: 0.6,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      marginBottom: 5,
    },
  });

  return (
    <View style={styles.facility}>
      <View style={styles.facilityIcon}>
        <MaterialIcons
          name= {icon}
          size={35}
          color="#25605C"
        />
      </View>
      <Text style={styles.facilityName}>{facility}</Text>
    </View>
  );
};

export default Facility;