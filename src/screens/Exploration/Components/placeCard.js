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
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlaceCard = ({ imageSource, name, ratings }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.card}>
        <ImageBackground source={imageSource} style={styles.image}>
          <LinearGradient
            colors={['transparent','rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)' ]}
            style={styles.gradient}
          >
            <View style={styles.textView}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.ratings}>Ratings: {ratings}</Text>
            </View>
            <TouchableOpacity style={styles.seeMoreContainer}>
              <Icon
                name="keyboard-arrow-right"
                size={45}
                color="white"
                style={{ padding: 10 }}
              />
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'whitesmoke',
    marginBottom: 16,
    width: '99%',
  },
  gradient: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flexDirection: 'row',
    width: '100%',
    height: 230,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textView: {
    width: '85%',
    justifyContent: 'flex-end',
    padding: 30,
  },
  name: {
    fontSize: 23,
    fontWeight: '400',
    paddingBottom: 10,
    color: 'white',
  },
  ratings: {
    color: 'white',
    fontSize: 23,
  },
  seeMoreContainer: {
    justifyContent: 'center',
  },
});

export default PlaceCard;
