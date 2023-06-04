import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from '../../components/InputField';

const ResetPassword = ({ navigation }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login functionality here
        console.log('Login button pressed');
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
        <Text style={styles.subHeading}>Please create a new password that you don’t use on any other site.</Text>

        {/* Password input field */}
        <Text style={styles.label}>New Password</Text>
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

        {/* Confirm Password input field */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={[styles.passwordContainer, {marginBottom: 40}]}>
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

        {/* Sign In button */}
        <ActionButton text="Reset Password"/>
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
        marginRight: 38
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
        fontWeight: "900",
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
        marginRight: 8
    },
    eyeIcon: {
        marginLeft: -35,
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
});

export default ResetPassword;
