import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from './components/InputField';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const ResetPassword = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = () => {
    const user = firebase.auth().currentUser;
    user
      .updatePassword(newPassword)
      .then(() => {
        console.log('Password reset successfully');
      })
      .catch((error) => {
        console.log('Error resetting password:', error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Head */}
      <Text style={styles.heading}>Reset Password</Text>

      {/* Subheading */}
      <Text style={styles.subHeading}>
        Please create a new password that you don’t use on any other site.
      </Text>

      {/* New Password input field */}
      <Text style={styles.label}>New Password</Text>
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Your Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password input field */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={[styles.passwordContainer, { marginBottom: 40 }]}>
        <InputField
          placeholder="Confirm Password"
          text=""
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
          <Icon
            name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Reset Password button */}
      <ActionButton text="Reset Password" onPress={handlePasswordReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 50,
    color: '#274B47',
    fontWeight: 'bold',
    lineHeight: 80,
    marginTop: 80,
    marginRight: 38,
  },
  subHeading: {
    marginHorizontal: 40,
    color: '#353535',
    fontSize: 20,
    lineHeight: 32,
    marginTop: 8,
    marginBottom: 30,
  },
  label: {
    color: '#274B47',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 12,
    marginLeft: 50,
    marginTop: 10,
    alignSelf: 'flex-start',
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
});

export default ResetPassword;
