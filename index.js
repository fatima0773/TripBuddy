/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import popularPlaces from './src/screens/Exploration/popularPlaces';

AppRegistry.registerComponent(appName, () => popularPlaces);
