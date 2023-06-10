import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '@react-native-firebase/auth';
import UserContext from '../userContext';
import { ActivityIndicator } from 'react-native-paper';

const ProfileComponent = ({ handlePress }) => {
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [loading, setLoading] = useState(true);
  const userId = useContext(UserContext);
  const styles = StyleSheet.create({
    account: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 20,
    },
    user: {
      fontSize: 23,
      fontWeight: '500',
      color: '#353535',
      fontFamily: 'Montserrat-Regular'
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  useEffect(() => {
		fetchUser()
  }, [user, name, profilePhoto])
  
  const fetchUser = () => {
		setLoading(true)
		const usersCollection = firebase.firestore().collection('users');
		usersCollection
			.doc(userId)
			.get()
			.then((doc) => {
				if (doc.exists) {
					const fetchedUser = doc.data();
					setUser(fetchedUser);
					setName(fetchedUser.name);
					setProfilePhoto(fetchedUser.profilePhoto)
				}
				setLoading(false)
			})
			.catch((error) => {
				console.log('Error fetching user name:', error);
			});
  };
  
  if (user === null) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color={selectedMode.primary} />
			</View>
		);
	}

  return (
    <View style={styles.account}>
      {profilePhoto === null ? (
        <TouchableOpacity onPress={handlePress}>
          <MaterialIcons2
            name="account-circle-outline"
            size={40}
            color="#A27B5C"
            style={{ marginRight: 20}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <Image source={{uri: profilePhoto}} style={styles.image} />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.user}>Hi, {name}!</Text>
      </View>
    </View>
  );
};

export default ProfileComponent;