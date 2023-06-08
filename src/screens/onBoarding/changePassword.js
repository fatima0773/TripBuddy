import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from './components/InputField';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const ChangePassword = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword
    );

    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user.updatePassword(newPassword)
          .then(() => {
            console.log('Password updated successfully');
          })
          .catch((error) => {
            console.log('Error updating password:', error.message);
          });
      })
      .catch((error) => {
        console.log('Error reauthenticating user:', error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!isNewPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Head */}
      <Text style={styles.heading}>Change Password</Text>

      {/* Subheading */}
      <Text style={styles.subHeading}>
        Keep your account protected with a stronger password
      </Text>

      {/* Old Password input field */}
      <Text style={styles.label}>Old Password</Text>
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Your Password"
          value={oldPassword}
          onChangeText={setOldPassword}
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

      {/* New Password input field */}
      <Text style={styles.label}>New Password</Text>
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Your Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!isNewPasswordVisible}
        />
        <TouchableOpacity onPress={toggleNewPasswordVisibility} style={styles.eyeIcon}>
          <Icon
            name={isNewPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Sign In button */}
      <ActionButton text="Update" onPress={handlePasswordChange} />

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
    marginRight: 15,
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

export default ChangePassword;
