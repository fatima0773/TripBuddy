import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PopularPlaces from '../screens/Exploration/popularPlaces';
import DestinationDetails from '../screens/Exploration/destinationDetails';
import ProfileScreen from '../screens/onBoarding/profileScreen';
import New_Trip from '../screens/Planning/PlanTrip';
import PastTrips from '../screens/Planning/pastTrips';
import TasksDone from '../screens/Planning/TasksDone';
import UpcomingTrips from '../screens/Planning/upcomingTrips';
import UpdateTask from '../screens/Planning/updateTask';
import ViewTask from '../screens/Planning/viewTask';
import AddNewTask from '../screens/Planning/addNewTask';

const Stack = createNativeStackNavigator();

function PlanningNavigator() {
  return (
      <Stack.Navigator initialRouteName="UpcomingTrips">
        <Stack.Screen
          name="PastTrips"
          component={PastTrips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TasksDone"
          component={TasksDone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewTask"
          component={ViewTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateTask"
          component={UpdateTask}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpcomingTrips"
          component={UpcomingTrips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTask"
          component={AddNewTask}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}

export default PlanningNavigator;