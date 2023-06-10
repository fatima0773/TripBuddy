import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  DatePickerAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import {InputField} from '../onBoarding/components/InputField';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ActionButton} from '../../components/ActionButton';

const AddNewJournal = ({navigation}) => {
  const [filePath, setFilePath] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);

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

    console.log(filePath);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={45}
          color="#D9D9D9"
          style={{padding: 10}}
        />
      </TouchableOpacity>
      {/* Head */}
      <Text style={styles.heading}>Make a new Entry</Text>
      <Text style={styles.subHeading}>A Collection of Travel Memories</Text>

      {/* Your destination input field */}
      <Text style={styles.label}>Destination</Text>
      <InputField
        placeholder="Enter Destination"
        text={destination}
        onChangeText={setDestination}
        style={{marginBottom: 15, fontFamily: 'Poppins-Light'}}
      />
      <Text style={styles.label}>Date</Text>
      <InputField
        placeholder="MM / YY"
        text={date}
        onChangeText={setDate}
        style={{marginBottom: 15, fontFamily: 'Poppins-Light'}}
      />

      <Text style={{fontSize:21, color: '#25605C', alignSelf: 'center', marginTop: 40, fontFamily: 'Poppins-Medium'}}>Memories from far and wide</Text>
      <Text style={{fontSize:18, color: '#353535', alignSelf: 'center', marginTop: 10, marginBottom: 30, fontFamily: 'Poppins-Light'}}>Let’s add some of your travel photos
</Text>
      {/* Camera icon */}
      {filePath === null ? (
        <TouchableOpacity
          onPress={() => chooseFile('photo')}
          style={styles.cameraContainer}>
          <View style={styles.cameraIcon}>
            <MaterialIcon name="camera" size={24} color="#25605C" />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            marginBottom: 20,
          }}>
          <Image source={{uri: filePath.uri}} style={styles.cameraIcon} />
        </View>
      )}

      {/* Save button */}
      <ActionButton
        onPress={() => navigation.navigate('View Journal Entry')}
        text="Save" style={{ marginTop: -10, alignSelf: 'center', fontFamily: 'Poppins-Bold' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 35,
    color: '#25605C',
    marginLeft: 50,
    marginTop: 30,
    fontFamily: 'Poppins-Bold'
  },
  subHeading: {
    marginLeft: 50,
    color: '#25605C',
    fontSize: 20,
    lineHeight: 32,
    marginTop: 8,
    marginBottom: 30,
    fontFamily: 'Poppins-Light'
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
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  label: {
    color: '#25605C',
    fontSize: 18,
    marginBottom: 12,
    marginLeft: 50,
    marginTop: 10,
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Bold'
  },
});

export default AddNewJournal;

/*

1- Add camera icon to upload image - least 
2- Setting margin top and bottom for input fields - done
(Should it really be a component. Cant use props of textinput, and add extra styling) 
3- Set margin for eye icon. Shifts the entire field when setting margin. - done
4- No show/hide feature for password, because of imported inputfield. Can't pass props.- done
5- No navigation for "Register" link.

*/
