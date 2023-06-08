import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const JournalCard = ({ data }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.imageContainer}>
        <Image source={data.imageSource} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.journalDetails}>{data.journalDetails.substring(0, 100)}...</Text>
      </View>
    </View>
  );
};

const JournalList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <JournalCard data={item} />}
      horizontal={true} 
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 240,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 1,
  },
  shadow: {
    elevation: 5,
    borderColor: '#353535',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
  },
  imageContainer: {
    height: 150
  },
  image: {
    flex: 1,
    borderRadius: 10,
    margin: 7,
    width: 210
  },
  bottomContainer: {
    padding: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#25605C',
    paddingBottom: 8
  },
  journalDetails: {
    fontSize: 15,
    fontWeight: '400',
    color: '#A27B5C',
  },
});

export default JournalList;
