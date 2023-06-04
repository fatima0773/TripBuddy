import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from '../../components/InputField';

const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSignUpPress = () => {
    navigation.navigate('Signup Screen');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('Forgot Password Screen');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Head */}
      <Text style={styles.heading}>Hello Again!</Text>
      <Text style={styles.subHeading}>Welcome back, you've been missed!</Text>

      {/* Your name input field */}
      <InputField
        placeholder="Your email"
        text=""
        style={{ marginBottom: 15}}
      />

      {/* Password input field */}
      <View style={styles.passwordContainer}>
        <InputField
          placeholder="Your Password"
          text=""
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

      {/* Forget Password */}
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPasswordPress}>
        <Text style={styles.clickableText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <ActionButton text="Sign In"/>

      {/* Link to registration */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>
          Don't have an account?{' '}
          <Text style={styles.clickableText} onPress={handleSignUpPress}>Register</Text>
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
    marginBottom: 50,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: -6,
    marginRight: 8
  },
  eyeIcon: {
    marginLeft: -35,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    marginRight: 45,
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
});

export default LoginScreen;

/*

1- Set margin for eye icon. Shifts the entire field when setting margin.- done
2- No show/hide feature for password, because of imported inputfield. Can't pass props. -done
3- No navigation for "Register" link.

*/