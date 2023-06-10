import React, { useEffect, useState } from "react";
import { Text, View, console } from "react-native";
import 'react-native-gesture-handler';
// import PopularPlaces from "./src/screens/Exploration/popularPlaces";
import { Platform } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import UserContext from "./src/userContext";
import ViewJournalEntry from "./src/screens/tripJournal/viewJournalEntry";
import SplashScreen from "./src/screens/splash/splashScreen";
import RootNavigator from "./src/navigation/rootNavigator";
const firebaseConfig = {
  apiKey: "AIzaSyCvq_2NLOqjKMtcydLjFA9oQDSTZVZGh_s",
  authDomain: "tripbuddy-dcd18.firebaseapp.com",
  projectId: "tripbuddy-dcd18",
  storageBucket: "tripbuddy-dcd18.appspot.com",
  messagingSenderId: "912674683384",
  appId: Platform.select({
    ios: '1:239209293905:ios:2ce73d7d44ea839b247070',
    android: '1:239209293905:android:3a2874a05aadf17c247070',
  }),
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={userId}>
      <RootNavigator />
      {/* <ViewJournalEntry />
      <SplashScreen/> */}
    </UserContext.Provider>
  )
}


export default App;