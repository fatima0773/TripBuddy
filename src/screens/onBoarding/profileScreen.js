import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ActionButton } from '../../components/ActionButton';
import { InputField } from '../../components/InputField';

const ProfileScreen = ({ navigation }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handleChangePassword = () => {
        navigation.navigate('Change Password Screen');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

  return (
    <View style={styles.container}>
        {/* Head */}
        <Text style={styles.heading}>Personal Info</Text>

        {/* Profile Picture */}
        <View style={styles.profileContainer}>
            <Image
                source={require('../../assets/images/profile.png')}
                style={styles.profilePicture}
            />
            <TouchableOpacity style={styles.changePictureButton}>
                <Text style={styles.changePictureButtonText}>Change Profile Picture</Text>
            </TouchableOpacity>
        </View>

        {/* Your name input field */}
        <Text style={styles.label}>Full Name</Text>
        <InputField
            placeholder="Your name"
            text="Vania Majid"
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
            text="090078601"
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
});

export default ProfileScreen;

/*

1- Add an image and change profile picture button
2- Make it suitable for an edit profile screen as well.

*/