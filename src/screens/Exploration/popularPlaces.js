import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar
} from 'react-native';
import PlaceCard from '../../components/placeCard';
import ProfileComponent from '../../components/profileComponent';
import Search from '../../components/search';

const PopularPlaces = () => {
  const [text, setText] = React.useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    heading1: {
      color: '#274B47',
      fontSize: 35,
      fontWeight: '600',
      paddingBottom: 20,
    },
    heading2: {
      color: '#25605C',
      fontSize: 25,
      fontWeight: '500',
      paddingBottom: 20,
    },
  });

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
    // Add more place card data objects here
  ];

  return (
    
    <View style={styles.container}>
      <StatusBar
                backgroundColor="#25605C"
            />
      <View style={{paddingRight: 25, paddingLeft: 25, paddingTop: 25}}>
        <ProfileComponent
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Vania"
        />
        <View>
          <Text style={styles.heading1}>Lets Explore Pakistan</Text>
        </View>
        <Search
          placeHolder="Search Location"
        />
        <View>
          <Text style={styles.heading2}>Popular Places</Text>
        </View>
        <SafeAreaView style={{paddingBottom: 530}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <PlaceCard
                imageSource={item.imageSource}
                name={item.name}
                ratings={item.ratings}
                icon="star"
                iconColor="#FFC700"
              />
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default PopularPlaces;
