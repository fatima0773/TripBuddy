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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25605C" />
      <View style={styles.contentContainer}>
        {/* Profile */}
        <ProfileComponent
          imageSource={require('../../assets/images/swat-valley.jpg')}
          name="Vania"
          handlePress={() => navigation.navigate('Profile')}
        />

        {/* Heading */}
        <View>
          <Text style={styles.heading1}>Dashboard</Text>
        </View>

        {/* Popular Places */}
        <View>
          <Text style={styles.heading2}>Popular Places</Text>
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('Popular Places')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <PopularPlaceList data={popularPlaceData}/>
        </View>

        {/* Trips */}
        <View>
          <Text style={styles.heading2}>Trips</Text>
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('Upcoming Trips')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <TripList data={tripsData}/>
        </View>

        {/* Journals */}
        <View>
          <Text style={styles.heading2}>Journals</Text>
          <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('Journals')}>
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
  }
});
