import React, {useEffect, useState} from 'react';
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
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const PopularPlaces = ({ navigation }) => {  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getPopularPlaces()
  }, [])
  
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

  const getPopularPlaces = async (gender, minAge, maxAge) => {
  setLoading(true);
  try {
    const tripsSnapshot = await firestore()
      .collection('trips')
      .get();

    const dataFetched = [];
    tripsSnapshot.forEach((doc) => {
      const tripsData = {
        id: doc.id,
        ...doc.data(),
      };
      dataFetched.push(tripsData);
    });

    setData(dataFetched);
    setLoading(false);
    console.log(data)
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};



  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#25605C"
      />
      <View style={{paddingRight: 25, paddingLeft: 25, paddingTop: 25}}>
        <ProfileComponent
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Vania"
          handlePress={() => navigation.navigate('Profile')}
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
                imageSource={{uri: item.photos[0]}}
                name={item.name}
                ratings={item.rating}
                icon="star"
                iconColor="#FFC700"
                handlePress={() => navigation.navigate('DestinationDetails', {
                  item: item
                })}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default PopularPlaces;
