import React, { useState } from 'react';
import { View, Image, TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IntroScreen = ({ navigation }) => {

  const handleSignInPress = () => {
    navigation.navigate('Login Screen');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup Screen');
  };

  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Welcome.png')}
          style={styles.image}
          resizeMode="cover"
        />
  
        {/* White Container */}
        <View style={styles.whiteContainer}>
          <Text style={styles.welcomeText}>Welcome to <Text style={styles.tripBuddyText}>TripBuddy</Text></Text>
          <Text style={styles.subText}>Your personalized travel planner in the palm of your hand!</Text>
        </View>
      </View>
  
      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.signupBtn} onPress={handleSignUpPress} underlayColor="#EDEDED">
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.signinBtn} onPress={handleSignInPress} underlayColor="#0B495D">
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  whiteContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  welcomeText: {
    fontSize: 55,
    color: '#274B47',
    fontWeight: 'bold',
    lineHeight: 80,
    marginTop: 60,
    marginHorizontal: 50,
    marginBottom: 5
  },
  tripBuddyText: {
    color: '#A27B5C',
  },
  subText: {
    marginHorizontal: 50,
    color: "#353535",
    fontSize: 20,
    marginTop: 8,
    lineHeight: 32,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 54,
    left: 30,
    right: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: "black"
  },
  signupBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: 56,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
    borderColor: 'black',
    borderWidth: 1,
  },
  signinBtn: {
    width: '55%',
    height: 56,
    backgroundColor: '#25605C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
  },
  signupText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '600',
  },
  signinText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '600',
  },
});

export default IntroScreen;

/*

1- Navigation for Login and Signup Screen not working again.
Error: Cannot read property 'navigate' of undefined

*/