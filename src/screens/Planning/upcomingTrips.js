import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import PlaceCard from "../Exploration/Components/placeCard";

const UpcomingTrips = () => {
  const [selected, setSelected] = useState("upcoming");

  const handleScrollLeft = () => {
    setSelected("upcoming");
  };

  const handleScrollRight = () => {
    setSelected("past");
    // navigation.navigate("PastTrips");
  };

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
      <ScrollView>
        <PlaceCard
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Hi there, I am Fahad"
          ratings={4.5}
          icon="star"
          iconColor={"#F2C94C"}
        />
        <PlaceCard
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Hi there, I am Fahad"
          ratings={4.5}

        />
        <PlaceCard
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Hi there, I am Fahad"
          ratings={4.5}
        />
        <PlaceCard
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Hi there, I am Fahad"
          ratings={4.5}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#274B47",
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  option: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 16,
  },
  selected: {
    color: "green",
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
});

export default UpcomingTrips;
