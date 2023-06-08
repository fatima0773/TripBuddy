import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const TripCard = ({ data }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Image source={data.imageSource} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.placeName}>{data.name}</Text>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.tripType}>{data.tripType}</Text>
      </View>
    </View>
  );
};

const TripList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TripCard data={item} />}
      horizontal={true} 
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 224, 
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 10,
    marginBottom: 19,
    overflow: 'hidden',
    marginTop: 2,
    // paddingVertical: 4
  },
  shadow:{
    elevation: 5,
    borderColor: '#353535',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
  },
  image: {
    width: 76,
    height: 88,
    borderRadius: 10,
    margin: 7,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    color: '#353535',
  },
  date: {
    fontSize: 14,
    fontWeight: '100',
    color: '#353535',
  },
  tripType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A27B5C',
  }
});

export default TripList;
