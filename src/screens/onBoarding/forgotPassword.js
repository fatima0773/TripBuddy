import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from '../../components/InputField';

const ForgotPassword = ({ navigation }) => {

    const handleSendLinkPress = () => {
        navigation.navigate('Reset Password Screen');
    };

    return (
        <View style={styles.container}>
            {/* Head */}
            <Text style={styles.heading}>Forgot Password</Text>
            
            {/* Subheading */}
            <Text style={styles.subHeading}>Please enter the email address you’d like your password reset information sent to.</Text>

            {/* Your email input field */}
            <Text style={styles.label}>Email</Text>
            <InputField
                placeholder="Your email"
                text="vania.majid14@gmail.com"
                style={{marginBottom: 40}}
            />

            {/* Sign In button */}
            <ActionButton 
                text="Send Link"
                onPress={handleSendLinkPress}
            />
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
        marginRight: 30
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

export default ForgotPassword;
