import {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import colors from '../styles/colors';
import Santorini from '../../assets/images/journal-assets/santorini.png';
import SwatValley from '../../assets/images/journal-assets/swat-valley.png';
import FairyMeadows from '../../assets/images/journal-assets/fairy-meadows.png';
import IoniconsIcons from 'react-native-vector-icons/Ionicons'; //pin
import AddNewButton from './components/addNewButton';
import NoteCard from './components/noteCard';

const ViewJournalEntry = ({navigation}) => {
  const selectedMode = colors['light'];
  const screenHeight = Dimensions.get('window').height;
  const [destinationImages, setDestinationImages] = useState([
    Santorini,
    SwatValley,
    FairyMeadows,
  ]);
  const [month, setMonth] = useState('Jun');
  const [year, setYear] = useState('2022');
  const [destination, setDestination] = useState('SANTORINI');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < destinationImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const data = [
    {
      imageSource: require('../../assets/images/journal-assets/santorini.png'),
      date: 'Jul 18th, 2022',
      text: 'Today, I had the extraordinary opportunity to immerse myself in the beauty and allure of Santorini . . .',
    },
    {
      imageSource: require('../../assets/images/journal-assets/santorini.png'),
      date: 'Jul 18th, 2022',
      text: 'Today, I had the extraordinary opportunity to immerse myself in the beauty and allure of Santorini . . .',
    },
  ];

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: selectedMode.background,
      height: '100%',
      width: '100%',
      padding: 20,
    },
    heading: {
      fontSize: 30,
      color: selectedMode.primaryDark,
      fontFamily: 'Poppins-Bold',
    },
    subHeading: {
      fontSize: 16,
      color: selectedMode.primaryDark,
      fontFamily: 'Poppins-Regular',
    },
    separator: {
      borderWidth: 3,
      borderColor: selectedMode.primaryLight,
      backgroundColor: selectedMode.primaryLight,
      height: 90,
      borderRadius: 20,
      marginHorizontal: 15,
    },
    journalCard: {
      backgroundColor: selectedMode.background,
      height: screenHeight * 0.45,
      width: '100%',
      alignItems: 'center',
      paddingVertical: 10,
      marginTop: 20,
      marginBottom: 30,
      elevation: 3,
      borderLeftWidth: 0.2,
      borderRightWidth: 0.2,
    },
    coverImage: {
      height: '80%',
      width: '90%',
    },
    tripDetailsContainer: {
      width: '80%',
      flex: 1,
      justifyContent: 'space-evenly',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    detailsText: {
      fontSize: 15,
      color: selectedMode.primaryDark,
      fontFamily: 'Poppins-Regular',
    },
    destinationImageContainer: {
      height: screenHeight * 0.3,
      backgroundColor: selectedMode.background,
      marginVertical: 30,
      borderRadius: 20,
      elevation: 4,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    carouselImageContainer: {
      height: '100%',
      width: '100%',
      borderRadius: 25,
      overflow: 'hidden',
      backgroundColor: 'yellow',
    },
    carouselImage: {
      height: screenHeight * 0.3,
      width: '100%',
      resizeMode: 'stretch',
      borderRadius: 25,
      overflow: 'hidden',
      elevation: 4,
      justifyContent: 'center',
    },
    carouselNavigation: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
    },
    carouselDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#CCC',
      marginHorizontal: 4,
    },
    carouselDotActive: {
      backgroundColor: selectedMode.background,
    },
    plusIcon: {
      fontSize: 50,
      color: '#333',
    },
    plusIconContainer: {
      position: 'absolute',
      top: '40%',
      right: '40%',
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 20,
    },
    navigationButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
    },
    navigationButton: {
      fontSize: 30,
      color: selectedMode.background,
    },
    emptyText: {
      fontSize: 20,
      color: selectedMode.secondaryText,
      fontFamily: 'Poppins-Light',
      textAlign: 'center',
      marginTop: 20,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AddNewButton
        handlePress={() => navigation.navigate('Add New Note')} />
      <StatusBar backgroundColor="#25605C" />
      <View style={styles.rowContainer}>
        <View style={{height: '100%'}}>
          <Text style={[styles.heading, {fontSize: 35}]}>{month}</Text>
          <Text style={styles.heading}>{year}</Text>
        </View>
        <View style={styles.separator} />
        <View style={{height: '100%', flex: 1}}>
          <Text style={[styles.heading, {fontSize: 35}]}>{destination}</Text>
          <Text style={styles.subHeading}>
            Exploring the World, One Entry at a Time
          </Text>
        </View>
      </View>
      <View style={styles.destinationImageContainer}>
        <ImageBackground
          style={styles.carouselImage}
          source={destinationImages[currentImageIndex]}>
          <View style={styles.navigationButtonsContainer}>
            <TouchableOpacity
              onPress={handlePreviousImage}
              disabled={currentImageIndex === 0}>
              <IoniconsIcons
                name="chevron-back-outline"
                style={[
                  styles.navigationButton,
                  {
                    opacity: currentImageIndex === 0 ? 0.4 : 1,
                  },
                ]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNextImage}
              disabled={currentImageIndex === destinationImages.length - 1}>
              <IoniconsIcons
                name="chevron-forward-outline"
                style={[
                  styles.navigationButton,
                  {
                    opacity:
                      currentImageIndex === destinationImages.length - 1
                        ? 0.4
                        : 1,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.carouselNavigation}>
            {destinationImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.carouselDot,
                  currentImageIndex === index && styles.carouselDotActive,
                ]}
              />
            ))}
          </View>
          {currentImageIndex === destinationImages.length - 1 && (
            <TouchableOpacity
              style={styles.plusIconContainer}
              onPress={() => console.log('Add New Photos')}>
              <IoniconsIcons name="add-circle" style={styles.plusIcon} />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
      <SafeAreaView style={{paddingBottom: 400}}>
      {data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <NoteCard
                imageSource={item.imageSource}
                date={item.date}
                text={item.text}
                handlePress={() => {navigation.navigate('View Note')}}
              />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>Add notes from your trip</Text>
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ViewJournalEntry;
