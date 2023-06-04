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
import colors from '../../styles/colors';

const PopularPlaceCard = ({imageSource, name, ratings, icon, iconColor}) => {
  const selectedMode = colors['light'];
  const styles = StyleSheet.create({
    card: {
      borderRadius: 20,
      backgroundColor: selectedMode.background,
      marginBottom: 19,
      width: '96%', // Adjust the width here
      elevation: 6,
      shadowColor: 'black',
      marginRight: 45,
      marginLeft: 35
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
      height: 130, // Adjust the height here
      borderRadius: 30,
      overflow: 'hidden',
    },
    detail: {
      width: '85%',
      justifyContent: 'flex-end',
      padding: 20, // Adjust the padding here
    },
    place:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 13,
    },
    placeName: {
      fontSize: 20,
      fontWeight: '400',
      color: 'white',
    },
    rating:{
      flexDirection: 'row', 
      alignItems: 'center'
    },
    ratingNo: {
      color: 'white',
      fontSize: 20,
    },
  });

  return (
    <View style={{alignItems: 'center'}}>

      <View style={styles.card}>

        {/* Image */}
        <ImageBackground source={imageSource} style={styles.image}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
            style={styles.gradient}>

            {/* Details */}
            <View style={styles.detail}>

              {/* Place */}
              <View style={styles.place}>
                <Feather name="map-pin" size={19} color="white" style={{paddingRight: 20}} />
                <Text style={styles.placeName}>{name}</Text>
              </View>

              {/* Ratings */}
              <View style={styles.rating}>
                <FontAwesome name={icon} size={20} color={iconColor} style={{paddingRight: 20}}/>
                <Text style={styles.ratingNo}>{ratings}</Text>
              </View>
            </View>

          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

export default PopularPlaceCard;
