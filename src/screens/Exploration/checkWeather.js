import {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CheckWeather = ({navigation}) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '0a59f50506870a59b5d2f77e635b0809  ';
  const city = 'Gilgit';
  const [value, onChangeText] = useState('');
  const selectedMode = colors['light'];

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: selectedMode.background,
      flex: 1,
      padding: 20,
    },
    heading: {
      fontSize: 30,
      color: selectedMode.primaryDark,
      fontFamily: 'Poppins-Bold',
    },
    coverImage: {
      height: 250,
      width: '100%',
      alignSelf: 'center',
      borderRadius: 25,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 5,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#25605C" />
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={45}
          color="#25605C"
        />
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <Text style={styles.heading}>Weather Information</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.coverImage}
              source={require('../../assets/images/swat-valley.jpg')}></Image>
          </TouchableOpacity>
        </View>
        {weatherData && weatherData.main && weatherData.weather ? (
          <View style={{alignItems: 'center', marginVertical: 30}}>
        <Text style={[styles.heading, {fontSize: 35}]}>{weatherData.name}</Text>
        <Image
              style={{height: 200, width: 200}}
              source={{ uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}></Image>
        <Text style={[styles.heading, {fontSize: 50, color:"#353535", fontFamily: 'Poppins-Medium'}]}>
        {Math.round(weatherData.main.temp - 273.15)}°C
        </Text>
        <Text style={[styles.heading, {fontSize: 25,  color:"#353535", fontFamily: 'Poppins-Light', fontStyle: 'italic'}]}>{weatherData.weather[0].description}</Text>
      </View>
        ):
        (<Text>Loading...</Text>)}
        </View>
        
    </SafeAreaView>
  );
};

export default CheckWeather;
