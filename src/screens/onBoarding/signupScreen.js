import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import {ActionButton} from '../../components/ActionButton';
import { InputField } from './components/InputField';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

const SignupScreen = ({navigation}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword]  = useState(null);
  const [showError, setShowError] = useState(false)


  const handleSignInPress = () => {
    navigation.navigate('Login Screen');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

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
		
    console.log(filePath)
  };

  const checkError = () => {
    if (name === null || email === null || filePath === null || contact === null || password === null) {
      setShowError(true)
      console.log(showError)
    }
    else {
      setShowError(false)
      handleSignup()
    }
  }

  const handleSignup = async () => {
    try {
			const userCredential = await auth().createUserWithEmailAndPassword(email, password);
			const storageRef = storage().ref().child(`userImages/${userCredential.user.uid}`);
			const snapshot = await storageRef.putFile(filePath.uri);
			const downloadURL = await storage().ref().child(`userImages/${userCredential.user.uid}`).getDownloadURL();
			await firestore().collection('users').doc(userCredential.user.uid).set(
        {
          name: name,
				  profilePhoto: downloadURL,
          email: email,
          contact: contact
				}
			);
			console.log('User signed up successfully!', userCredential.user);
			await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
      navigation.navigate('Tab')
		} catch (error) {
			console.error('Error signing up:', error);
		}
  }

  useEffect(() => {
  }, [showError])
  

  return (
    <View style={styles.container}>
      {/* Head */}
      <Text style={styles.heading}>Let's sign you up</Text>
      <Text style={styles.subHeading}>
        Join our travel community and make your wanderlust a reality.
      </Text>

      {/* Camera icon */}
      {
        filePath === null ? (
          <TouchableOpacity
        onPress={() => chooseFile('photo')}
        style={styles.cameraContainer}>
        <View style={styles.cameraIcon}>
          <MaterialIcon name="camera" size={24} color="#25605C" />
        </View>
      </TouchableOpacity>
        ) : 
        (
          <View style={{
            marginBottom: 20
          }}>
            <Image source={{ uri: filePath.uri }} style={styles.cameraIcon} />
          </View>
        )
      }
      {
        showError === true ? (<Text style={{ color: 'red', marginVertical: 10, fontFamily: 'Poppins-Regular' }}>Please fill out all the required fields</Text>) : null
      }

      {/* Your name input field */}
      <InputField
        placeholder="Your name"
        text={name}
        onChangeText={setName}
        style={{ marginBottom: 15 }} />

      {/* Your email input field */}
      <InputField
        placeholder="Your email"
        text={email}
        onChangeText={setEmail}
        style={{ marginBottom: 15 }} />

      {/* Your phone number input field */}
      <InputField
        placeholder="Your phone number"
        text={contact}
        onChangeText={setContact}
        style={{marginBottom: 15}}
      />

      {/* Password input field */}
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Your Password"
          text={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password input field */}
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Confirm Password"
          text={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={toggleConfirmPasswordVisibility}
          style={styles.eyeIcon}>
          <Icon
            name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Sign In button */}
      <ActionButton
        text="Sign Up"
        style={{ marginTop: 20 }}
        onPress={checkError}
      />

      {/* Link to registration */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>
          Already have an account?{' '}
          <Text style={styles.clickableText} onPress={handleSignInPress}>
            Sign In
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 55,
    color: '#274B47',
    fontWeight: 'bold',
    lineHeight: 80,
  },
  subHeading: {
    marginHorizontal: 80,
    color: '#353535',
    fontSize: 20,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  cameraContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cameraIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(39, 75, 71, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: -6,
    marginRight: 8,
  },
  eyeIcon: {
    marginLeft: -35,
  },
  registerButton: {
    marginTop: 5,
  },
  registerButtonText: {
    fontSize: 17,
    color: 'black',
    marginTop: 15,
  },
  clickableText: {
    color: '#A27B5C',
    fontWeight: '600',
  },
  profilePicture: {
    width: '100%',
		height: '100%',
  }
});

export default SignupScreen;

/*

1- Add camera icon to upload image - least 
2- Setting margin top and bottom for input fields - done
(Should it really be a component. Cant use props of textinput, and add extra styling) 
3- Set margin for eye icon. Shifts the entire field when setting margin. - done
4- No show/hide feature for password, because of imported inputfield. Can't pass props.- done
5- No navigation for "Register" link.

*/
