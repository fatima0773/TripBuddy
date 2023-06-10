import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Facility from './Components/facility';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DestinationDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const destination = item;
  console.log('item passed is: ', destination)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    image: {
      width: Dimensions.get('window').width,
      height: 350,
    },
    dotContainer: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: "23%",
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 3,
      backgroundColor: 'white',
      opacity: 0.6,
    },
    activeDot: {
      backgroundColor: 'white',
      opacity: 1,
    },
    arrowContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    details: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: '68%',
      backgroundColor: 'white',
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
    },
    detailsView: {
      margin: 40,
    },
    destinationName: {
      color: '#274B47',
      fontSize: 35,
      fontWeight: 'bold',
    },
    price: {
      color: '#274B47',
      fontSize: 20,
    },
    like: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: 57,
      borderRadius: 40,
      elevation: 20,
      position: 'absolute',
      top: -30,
      right: 40,
    },
    icon: {
      padding: 10,
    },
    heading: {
      fontSize: 20,
      color: '#25605C',
      fontWeight: '500',
      marginBottom: 10,
      marginTop: 20,
    },
    description: {
      fontSize: 18,
      color: '#353535',
    },
    attractions: {
      color: '#A27B5C',
      fontSize: 17,
      fontStyle: 'italic',
    },
    button: {
      backgroundColor: '#25605C',
      width: '100%',
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
    },
    text: {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
      textAlign: 'center',
    },
  });


  const images = [
    require('../../assets/images/swat-valley.jpg'),
    require('../../assets/images/swat-valley.jpg'),
    require('../../assets/images/swat-valley.jpg'),
    require('../../assets/images/swat-valley.jpg'),
    require('../../assets/images/swat-valley.jpg'),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const renderImage = ({item}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  const renderDot = index => {
    const dotStyle = [styles.dot, activeIndex === index && styles.activeDot];
    return <View style={dotStyle} key={index} />;
  };

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={{height: 350}}>
        <FlatList
          data={destination.photos}
          renderItem={renderImage}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / Dimensions.get('window').width);
            setActiveIndex(index);
          }}
        />
        <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={45}
            color="white"
            style={{padding: 10}}
          />
        </TouchableOpacity>
        <View style={styles.dotContainer}>
          {images.map((_, index) => renderDot(index))}
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.like}>
          <TouchableOpacity onPress={handlePress}>
            <MaterialCommunityIcons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={35}
              color={isLiked ? 'red' : 'black'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.detailsView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.destinationName}>{destination.name}</Text>
            <Text style={styles.price}>{destination.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="access-time"
                size={25}
                color="#A27B5C"
                style={{paddingRight: 10}}
              />
              <Text style={[styles.price, {color: '#A27B5C'}]}>
                {destination.duration} days package
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="star"
                size={25}
                color="#FFC700"
                style={{paddingRight: 10}}
              />
              <Text style={[styles.price, { color: '#A27B5C' }]}>{destination.rating}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.description}>
              {destination.description}
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>Package Facilities</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Facility icon="person" facility="Instructor" />
              <Facility icon="hotel" facility="Hotel" />
              <Facility icon="directions-car" facility="Transport" />
              <Facility icon="fastfood" facility="Food" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckWeather')}
            style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Text style={styles.attractions}>Check Weather</Text>
            <FontAwesome
              name="angle-double-right"
              size={20}
              color="#A27B5C"
              style={{paddingLeft: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PlanTrip')}
            style={styles.button} >
            <Text style={styles.text}>Book Trip Now</Text>
            <MaterialCommunityIcons
              name="chevron-triple-right"
              size={25}
              color="white"
              style={{paddingLeft: 10}}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default DestinationDetails;
