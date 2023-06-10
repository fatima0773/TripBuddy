import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewAllJournalEntries from '../screens/tripJournal/viewAllJournalEntries';
import ViewJournalEntry from '../screens/tripJournal/viewJournalEntry';
import ViewNote from '../screens/tripJournal/viewNote';
import AddNewJournal from '../screens/tripJournal/addNewJournalEntry';
import AddNewNote from '../screens/tripJournal/addNewNote';

const Stack = createNativeStackNavigator();

const JournalNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="View All Journal Entries"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }} />
        <Stack.Screen
          name="View Journal Entry"
          component={ViewJournalEntry}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Add New Note"
          component={AddNewNote}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="View Note"
          component={ViewNote}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Add New Journal Entry"
          component={AddNewJournal}
          options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default JournalNavigator;

