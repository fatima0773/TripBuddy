import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import PlaceCard from "./Components/placeCard";

const PopularPlaces = () => {
    return (
      <View style={styles.container}>
        <PlaceCard
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Trip Place Name"
          ratings={4.5}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
  });
  
  export default PopularPlaces;