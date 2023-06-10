import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons'; //pin
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //pin

const NoteCard = ({imageSource, date, text, navigation, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={handlePress}
    >
      <IoniconsIcons
      
        name="pin"
        size={20}
        color="#B61717"
        style={{paddingRight: 20, position: 'absolute', left: '50%', top: -10}}
      />
      <View style={{flexDirection: 'row', alignItems: 'flex-end',}}>
        <Image source={imageSource} style={styles.image} />
        <View style={{width: '37%', alignSelf: 'center'}}>
          <Text style={[styles.text, {color: '#25605C', fontWeight: 500, marginBottom: 10}]}>{date}</Text>
          <Text style={[styles.text, {color: '#A27B5C'}]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    height: 200,
    width: '100%',
    borderRadius: 20,
    borderColor: '#DBDBDB',
    borderWidth: 0.3,
    elevation: 6,
    padding: 15,
  },
  image: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
  },
});

export default NoteCard;
