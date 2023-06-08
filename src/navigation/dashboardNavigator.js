import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularPlaces from '../screens/Exploration/popularPlaces';
import ProfileScreen from '../screens/onBoarding/profileScreen';
import ViewAllJournalEntries from '../screens/tripJournal/viewAllJournalEntries';
import UpcomingTrips from '../screens/Planning/upcomingTrips';

const Stack = createNativeStackNavigator();

function Dashboard() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Popular Places"
        component={PopularPlaces}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Upcoming Trips"
        component={UpcomingTrips}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Journals"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Dashboard;

