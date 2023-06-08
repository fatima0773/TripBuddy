import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import PlaceCard from "../../components/placeCard";
import BottomTabNavigator from "../../navigation/bottomTabNavigator";

const UpcomingTrips = () => {

  const navigation = useNavigation();

  const [selected, setSelected] = useState("upcoming");
  const handleScrollLeft = () => {
    setSelected("upcoming");

  };
  const handleScrollRight = () => {
    navigation.navigate('PastTrips', { selected: "past" });
  };
  

  const data = [
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
    {
      imageSource: require('../../assets/images/swat-valley.jpg'),
      name: 'Swat Valley',
      ratings: 4.9,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Trips</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={handleScrollLeft}>
          <Text style={[styles.option, selected === "upcoming" && styles.selected]}> Upcoming </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScrollRight}>
          <Text style={[styles.option, selected === "past" && styles.selected]}> Past </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />
      
      <SafeAreaView style={{paddingBottom:100}}>
      <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <PlaceCard
                imageSource={item.imageSource}
                name={item.name}
                ratings={item.ratings}
                icon="calendar"
                iconColor="white"
                handlePress={() => navigation.navigate('ViewTask')}
              />
            )}
          />

      </SafeAreaView>
      <BottomTabNavigator />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#274B47",
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 8,
    
  },
  option: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 16,
    color: "#353535",
    opacity: 0.5,
  },
  selected: {
    color: "#25605C",
    borderBottomWidth: 2,
    borderBottomColor: "#25605C",
    opacity: 1,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
});

export default UpcomingTrips;
