import { useState } from "react";
import {
	Dimensions,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity
} from "react-native";
import colors from "../styles/colors";
import ProfileComponent from "../../components/profileComponent";
import Santorini from '../../assets/images/journal-assets/santorini.png';
import SwatValley from '../../assets/images/journal-assets/swat-valley.png';
import FairyMeadows from '../../assets/images/journal-assets/fairy-meadows.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather'

const ViewAllJournalEntries = ({navigation}) => {
  const selectedMode = colors['light'];
  const [name, setName] = useState('Fatima');
  const [profilePicture, setProfilePicture] = useState('');
  const screenHeight = Dimensions.get('window').height;
  const [journalEntries, setJournalEntries] = useState([
    {
      place: 'SANTORINI',
      date: 'Jul, 2022',
      coverImage: Santorini
    },
    {
      place: 'SWAT VALLEY',
      date: 'Dec, 2021',
      coverImage: SwatValley
    },
    {
      place: 'FAIRY MEADOWS',
      date: 'Jan, 2023',
      coverImage: FairyMeadows,
    }
  ]);

  const renderJournalCard = ({ item }) => {
    return (
			<TouchableOpacity style={styles.journalCard}
				onPress={() => navigation.navigate('View Journal Entry')}
			>
        <Image style={styles.coverImage} source={item.coverImage} />
        <View style={styles.tripDetailsContainer}>
          <View style={styles.rowContainer}>
            <EvilIcons name='location' size={25} color={selectedMode.primaryDark} />
            <Text style={styles.detailsText}>{item.place}</Text>
          </View>
          <View style={styles.rowContainer}>
            <EvilIcons name='calendar' size={25} color={selectedMode.primaryDark} />
            <Text style={styles.detailsText}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

	const styles = StyleSheet.create({
		mainContainer: {
			backgroundColor: selectedMode.background,
			height: '100%',
			width: '100%', 
			padding: 20
		},
		heading: {
			fontSize: 30,
			color: selectedMode.primaryDark,
			fontFamily: 'Poppins-Bold'
		}, 
		subHeading: {
			fontSize: 20,
			color: selectedMode.primaryDark,
			fontFamily: 'Poppins-Regular'
		}, 
		journalCard: {
			backgroundColor: selectedMode.background,
			height: screenHeight*0.45,
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
			width: '90%'
		}, 
		tripDetailsContainer: {
			width: '90%',
			flex: 1, 
			justifyContent: 'space-evenly'
		}, 
		rowContainer: {
			flexDirection: 'row', 
			alignItems: 'center', 
			marginTop: 5
		}, 
		detailsText: {
			fontSize: 15,
			color: selectedMode.primaryDark,
			fontFamily: 'Poppins-Regular',
		}, 
		listEnd: {
			height: 10,
			width: 10,
			backgroundColor: 'rgba(217, 217, 217, 0.5);',
			borderRadius: 20
		}, 
		addButton: {
			backgroundColor: selectedMode.primaryLight, 
			height: 60, 
			width: 60, 
			borderRadius: 100, 
			justifyContent: 'center',
			alignItems: 'center', 
			position: 'absolute', 
			bottom: 15,
			right: 15,
			zIndex: 10
		}
	})

  return (
		<SafeAreaView style={styles.mainContainer}>
			<TouchableOpacity style={styles.addButton}
				onPress={() => navigation.navigate('Add New Journal Entry')}>
				<FeatherIcons
					name="plus"
					color="white"
					size={35}
				/>
			</TouchableOpacity>
			<StatusBar backgroundColor="#25605C" />
			<ProfileComponent imageSource={require('../../assets/images/swat-valley.jpg')} name={name} />
			<Text style={styles.heading}>Tales from the Road</Text>
			<Text style={styles.subHeading}>Your Latest Adventures</Text>
			<FlatList
				data={journalEntries}
				renderItem={renderJournalCard}
				keyExtractor={(item, index) => index.toString()}
			/>
    </SafeAreaView>
  );
};

export default ViewAllJournalEntries;






