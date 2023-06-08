import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from './components/InputField';
import auth, { firebase } from '@react-native-firebase/auth';
import UserContext from '../../userContext';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({ navigation }) => {
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	// const userId = useContext(UserContext);
	const [user, setUser] = useState();
	const [profilePhoto, setProfilePhoto] = useState();
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [filePath, setFilePath] = useState('')

	const handleChangePassword = () => {
			navigation.navigate('Change Password Screen');
	};

	const togglePasswordVisibility = () => {
			setPasswordVisible(!isPasswordVisible);
	};
	
	useEffect(() => {
		fetchUser()
	}, [profilePhoto])

	const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      presentationStyle: 'popover',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response.assets[0]);
		});
		
		updatePhoto();
		
    console.log(filePath)
  };
	

	const fetchUser = (uid) => {
		uid = 'rjO2ABVS5JPAJH6vDUF9mJLPc2a2';
		setLoading(true)
		const usersCollection = firebase.firestore().collection('users');
		usersCollection
			.doc(uid)
			.get()
			.then((doc) => {
				if (doc.exists) {
					const fetchedUser = doc.data();
					setUser(fetchedUser);
					setName(fetchedUser.name);
					setEmail(fetchedUser.email);
					setContact(fetchedUser.contact);
					setProfilePhoto(fetchedUser.profilePhoto)
				}
				console.log(user)
				setLoading(false)
			})
			.catch((error) => {
				console.log('Error fetching user name:', error);
			});
	};

	const updateName = () => {
		const userId = 'rjO2ABVS5JPAJH6vDUF9mJLPc2a2';
		const usersCollection = firebase.firestore().collection('users');
		usersCollection
			.doc(userId)
			.update({ name: name })
			.then(() => {
				console.log('Name updated successfully!');
			})
			.catch((error) => {
				console.log('Error updating name:', error);
			});
	};
	
	const updateContact = () => {
		const userId = 'rjO2ABVS5JPAJH6vDUF9mJLPc2a2';
		const usersCollection = firebase.firestore().collection('users');
		usersCollection
			.doc(userId)
			.update({ contact: contact })
			.then(() => {
				console.log('Contact updated successfully!');
			})
			.catch((error) => {
				console.log('Error updating Contact:', error);
			});
	};
	
	const updatePhoto = async () => {
		const userId = 'rjO2ABVS5JPAJH6vDUF9mJLPc2a2';
		try {
			setLoading(true)
			const storageRef = storage().ref().child(`userImages/${userId}`);
			const snapshot = await storageRef.putFile(filePath.uri);
			const downloadURL = await storage().ref().child(`userImages/${userId}`).getDownloadURL();

			await firestore().collection('users').doc(userId).update({ profilePhoto: downloadURL });

			console.log('Photo added successfully');
			setLoading(false)
		} catch (error) {
			console.error('Error adding photo:', error);
		}
	};


	if (user === null) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color={selectedMode.primary} />
			</View>
		);
	}

  return (
    <View style={styles.container}>
        {/* Head */}
        <Text style={styles.heading}>Personal Info</Text>

        {/* Profile Picture */}
        <View style={styles.profileContainer}>
            <Image
                source={{uri: profilePhoto}}
                style={styles.profilePicture}
            />
				<TouchableOpacity
					onPress={() => chooseFile('photo')}
					style={styles.changePictureButton}>
                <Text style={styles.changePictureButtonText}>Change Profile Picture</Text>
            </TouchableOpacity>
        </View>

        {/* Your name input field */}
			<Text style={styles.label}>Name</Text>
        <InputField
					placeholder="Your name"
					text={name}
					onChangeText={(text) => setName(text)}
					onBlur={updateName}
        />

        {/* Your email input field */}
        <Text style={styles.label}>Email</Text>
        <InputField
            placeholder="Your email"
            text="vania.majid14@gmail.com"
        />

        {/* Your phone input field */}
        <Text style={styles.label}>Phone</Text>
        <InputField
					placeholder="Your phone"
					text={contact}
					onChangeText={(text) => setContact(text)}
					onBlur={updateContact}
					style={{marginBottom: 40}}
        />

        <TouchableOpacity style={styles.changePassword} onPress={handleChangePassword}>
            <Text style={styles.clickableText}>Change Password</Text>
        </TouchableOpacity>

        {/* Sign In button */}
        <ActionButton text="Update"/>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 50,
        color: '#274B47',
        fontWeight: 'bold',
        lineHeight: 80,
        marginTop: 80,
        marginRight: 80
    },
    label: {
        color: '#274B47',
        fontSize: 18,
        fontWeight: "900",
        marginBottom: 12,
        marginLeft: 50,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    changePassword: {
        alignSelf: 'flex-end',
        marginBottom: 30,
        marginRight: 55,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    changePictureButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        borderColor: "#25605C",
        borderWidth: 1,
        marginLeft: 30
    },
    changePictureButtonText: {
        color: '#25605C',
        fontSize: 16,
        fontWeight: 'bold',
    },
    clickableText: {
        color: '#274B47',
        fontSize: 17,
        fontWeight: '600',
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ProfileScreen;

/*

1- Add an image and change profile picture button
2- Make it suitable for an edit profile screen as well.

*/