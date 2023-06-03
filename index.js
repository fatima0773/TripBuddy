/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import popularPlaces from './src/screens/Exploration/popularPlaces';

import PlanTrip from './src/screens/Planning/PlanTrip.js'

import upcomingTrips from './src/screens/Planning/upcomingTrips.js'

import viewTask from './src/screens/Planning/viewTask.js'
import AddNewTask from './src/screens/Planning/addNewTask';
import updateTask from './src/screens/Planning/updateTask';
import GoogleMapsView from './src/screens/Planning/GoogleMaps';

AppRegistry.registerComponent(appName, () => updateTask);
