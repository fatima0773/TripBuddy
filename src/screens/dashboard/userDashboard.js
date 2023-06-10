import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import ProfileComponent from '../../components/profileComponent';
import PopularPlaceList from './components/popularPlaceList';
import TripList from './components/tripList';
import JournalList from './components/journalList';
import { firebase } from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const UserDashboard = ({ navigation }) => {
  
  const popularPlaceData = [
    {
        id: 1,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        ratings: 4.9,
    },
    {
        id: 2,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        ratings: 4.9,
    },
    {
        id: 3,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        ratings: 4.9,
    },
  ];

  const tripsData = [
    {
        id: 1,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        date: '23 January, 2023',
        tripType: 'Upcoming'
    },
    {
        id: 2,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        date: '23 January, 2023',
        tripType: 'Past'
    },
    {
        id: 3,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        name: 'Swat Valley',
        date: '23 January, 2023',
        tripType: 'Upcoming'
    },
  ];

  const jounralsData = [
    {
        id: 1,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        date: '23 January, 2023',
        journalDetails:"As I stepped foot onto this enchanting paradise, I was instantly captivated by its striking landscapes, whitewashed houses, and the renowned blue-domed churches that adorn the cliffside. The day began with a refreshing breeze greeting me as I stood atop the cliffs of Fira, the island's main town. The panoramic view that unfolded before my eyes was truly breathtaking. The azure waters stretched out as far as the eye could see, blending seamlessly with the vibrant blue of the sky. The cliffs, painted in shades of white and beige, created a stark contrast against the deep blue sea—a sight I will forever cherish."
    },
    {
        id: 2,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        date: '23 January, 2023',
        journalDetails:"As I stepped foot onto this enchanting paradise, I was instantly captivated by its striking landscapes, whitewashed houses, and the renowned blue-domed churches that adorn the cliffside. The day began with a refreshing breeze greeting me as I stood atop the cliffs of Fira, the island's main town. The panoramic view that unfolded before my eyes was truly breathtaking. The azure waters stretched out as far as the eye could see, blending seamlessly with the vibrant blue of the sky. The cliffs, painted in shades of white and beige, created a stark contrast against the deep blue sea—a sight I will forever cherish."
    },
    {
        id: 3,
        imageSource: require('../../assets/images/swat-valley.jpg'),
        date: '23 January, 2023',
        journalDetails:"As I stepped foot onto this enchanting paradise, I was instantly captivated by its striking landscapes, whitewashed houses, and the renowned blue-domed churches that adorn the cliffside. The day began with a refreshing breeze greeting me as I stood atop the cliffs of Fira, the island's main town. The panoramic view that unfolded before my eyes was truly breathtaking. The azure waters stretched out as far as the eye could see, blending seamlessly with the vibrant blue of the sky. The cliffs, painted in shades of white and beige, created a stark contrast against the deep blue sea—a sight I will forever cherish."
    },
  ];

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      
      navigation.navigate('Intro Screen')
      // Logout successful
      // You can navigate to the login screen or perform any other necessary actions
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25605C" />
      <View style={styles.contentContainer}>
        {/* Profile */}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Profile */}
          <ProfileComponent
            imageSource={require('../../assets/images/swat-valley.jpg')}
            name="Vania"
            handlePress={() => navigation.navigate('Profile')}
          />
          <TouchableOpacity onPress={handleLogout}>
            <MaterialIcons name="power-settings-new" color='#25605C' size={25} style={{paddingRight: 20, paddingBottom:20}}/>
          </TouchableOpacity>
        </View>

        {/* Heading */}
        <View>
          <Text style={styles.heading1}>Dashboard</Text>
        </View>

        {/* Popular Places */}
        <View>
          <Text style={styles.heading2}>Popular Places</Text>
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('Exploration', {screen: 'PopularPlaces'})}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <PopularPlaceList data={popularPlaceData}/>
        </View>

        {/* Trips */}
        <View>
          <Text style={styles.heading2}>Trips</Text>
          <TouchableOpacity style={styles.seeMoreButton}
            onPress={() => navigation.navigate('Trip Planning', { screen: 'UpcomingTrips' })}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <TripList data={tripsData}/>
        </View>

        {/* Journals */}
        <View>
          <Text style={styles.heading2}>Journals</Text>
          <TouchableOpacity style={styles.seeMoreButton}
            onPress={() => navigation.navigate('Journal', { screen: "View All Journal Entries" })}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <JournalList data={jounralsData}/>
        </View>
        
      </View>
    </View>
  );
};

export default UserDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainer: {
    flex: 1,
    padding: 30,
    paddingRight: 0
  },
  heading1: {
    color: '#274B47',
    fontSize: 35,
    fontWeight: '600',
    paddingBottom: 20,
  },
  heading2: {
    color: '#25605C',
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 10,
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
  }
});
