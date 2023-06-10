import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularPlaces from '../screens/Exploration/popularPlaces';
import DestinationDetails from '../screens/Exploration/destinationDetails';
import ProfileScreen from '../screens/onBoarding/profileScreen';
import New_Trip from '../screens/Planning/PlanTrip';
import CheckWeather from '../screens/Exploration/checkWeather';

const Stack = createNativeStackNavigator();

function Exploration() {
  return (
    <Stack.Navigator initialRouteName='PopularPlaces'>
      <Stack.Screen
        name="PopularPlaces"
        component={PopularPlaces}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="DestinationDetails"
        component={DestinationDetails}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="PlanTrip"
        component={New_Trip}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="CheckWeather"
        component={CheckWeather}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Exploration;

