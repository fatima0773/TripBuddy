import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

const PopularPlaceCard = ({ data }) => {
  return (
    <View style={{alignItems: 'center'}}>

    <View style={styles.card}>

      {/* Image */}
      <ImageBackground source={data.imageSource} style={styles.image}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}>

          {/* Details */}
          <View style={styles.detail}>

            {/* 1- Place */}
            <View style={styles.place}>
              <Feather name="map-pin" size={15} color="white" style={{paddingRight: 20}} />
              <Text style={styles.placeName}>{data.name}</Text>
            </View>

            {/* 2- Ratings */}
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="#FFC700" style={{paddingRight: 20}}/>
              <Text style={styles.ratingNo}>{data.ratings}</Text>
            </View>

          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  </View>
  )
};

const PopularPlaceList = ({ data }) => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <PopularPlaceCard data={item} />}
    horizontal={true} 
  />
  )
};
  
const selectedMode = colors['light'];
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: selectedMode.background,
    marginBottom: 19,
    width: '96%', 
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
    height: 125, 
    borderRadius: 20,
    overflow: 'hidden',
  },
  detail: {
    width: '85%',
    justifyContent: 'flex-end',
    padding: 20, 
  },
  place:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
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

export default PopularPlaceList;
