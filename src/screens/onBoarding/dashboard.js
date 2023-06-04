import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PopularPlaceCard from './components/popularPlaceCard';
import ProfileComponent from '../../components/profileComponent';

const Dashboard = () => {
  const [text, setText] = React.useState('');

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
    // Add more place card data objects here
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25605C" />
      <View style={styles.contentContainer}>
        {/* Profile */}
        <ProfileComponent
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Vania"
        />

        {/* Heading */}
        <View>
          <Text style={styles.heading1}>Dashboard</Text>
        </View>

        {/* Popular Places */}
        <View>
          <Text style={styles.heading2}>Popular Places</Text>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContentContainer}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item, index) => (
              <PopularPlaceCard
                key={index}
                imageSource={item.imageSource}
                name={item.name}
                ratings={item.ratings}
                icon="star"
                iconColor="#FFC700"
              />
            ))}
          </ScrollView>
        </View>

        {/* Trips */}
        <View>
          <Text style={styles.heading2}>Trips</Text>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* Journals */}
        <View>
          <Text style={styles.heading2}>Journals</Text>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 25,
    paddingRight: 0,
  },
  heading1: {
    color: '#274B47',
    fontSize: 35,
    fontWeight: '600',
    paddingBottom: 20,
  },
  heading2: {
    color: '#25605C',
    fontSize: 28,
    fontWeight: '600',
    paddingBottom: 20,
  },
  seeMoreButton: {
    position: 'absolute',
    top: 0,
    right: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  seeMoreText: {
    color: '#353535',
    fontSize: 16,
    fontWeight: '100',
  },
  scrollViewContentContainer: {
    paddingRight: 10,
  },
});
