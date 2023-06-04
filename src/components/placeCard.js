import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../screens/styles/colors';

const PlaceCard = ({imageSource, name, ratings, icon, iconColor}) => {
  const selectedMode = colors['light'];
  const styles = StyleSheet.create({
    card: {
      borderRadius: 30,
      backgroundColor: selectedMode.background,
      marginBottom: 19,
      width: '97%',
      elevation: 6,
      shadowColor: 'black',
    },
    gradient: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      flexDirection: 'row',
      width: '100%',
      height: 210,
      borderRadius: 30,
      overflow: 'hidden',
    },
    textView: {
      width: '85%',
      justifyContent: 'flex-end',
      padding: 30,
    },
    name: {
      fontSize: 24,
      fontWeight: '400',
      color: 'white',
    },
    ratings: {
      color: 'white',
      fontSize: 24,
    },
    seeMoreContainer: {
      justifyContent: 'center',
    },
  });

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.card}>
        <ImageBackground source={imageSource} style={styles.image}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
            style={styles.gradient}>
            <View style={styles.textView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 13,
                }}>
                <Feather
                  name="map-pin"
                  size={22}
                  color="white"
                  style={{paddingRight: 20}}
                />
                <Text style={styles.name}>{name}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome
                  name={icon}
                  size={23}
                  color={iconColor}
                  style={{paddingRight: 20}}
                />
                <Text style={styles.ratings}>{ratings}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeMoreContainer}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={45}
                color="white"
                style={{padding: 10}}
              />
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

export default PlaceCard;
