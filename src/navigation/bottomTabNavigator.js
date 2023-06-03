import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import colors from '../screens/styles/colors';
import { useEffect, useState } from 'react';
import ViewAllJournalEntries from '../screens/tripJournal/viewAllJournalEntries';
import MatericalCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons' //home list-unordered
import FoundationIcon from 'react-native-vector-icons/Foundation' // mountains
import IoniconsIcon from 'react-native-vector-icons/Ionicons' //journal-outline

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {

	const FocusedTabBarIcon = ({tabName}) => {
		return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
				borderRadius: 100,
				backgroundColor: selectedMode.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
        padding: 15,
      }}>
        {
          tabName === 1 ? <FoundationIcon name="mountains" color={'#25605C'} size={25} /> : null
        }
        {
          tabName === 2 ? <MatericalCommunityIcon name="bag-suitcase-outline" color={'#25605C'} size={25} /> : null
        }
        {
          tabName === 3 ? <OcticonsIcon name="home" color={'#25605C'} size={25} /> : null
        }
        {
          tabName === 4 ? <OcticonsIcon name="list-unordered" color={'#25605C'} size={25} /> : null
        }
        {
          tabName === 5 ? <IoniconsIcon name="journal-outline" color={'#25605C'} size={25}  /> : null
        }
			</View>
		)
	}

	const [mode, setMode] = useState('light');
  const selectedMode = colors[mode];
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
					if (route.name === 'Exploration') {
						return focused ? (
							<FocusedTabBarIcon
								tabName={1}
							/>
            ) : (
              <FoundationIcon name="mountains" color={'#ADADAD'} size={25} />
            );
					}
					else if (route.name === 'Trip Planning') {
						return focused ? (
							<FocusedTabBarIcon
								tabName={2}
							/>
            ) : (
              <MatericalCommunityIcon name="bag-suitcase-outline" color={'#ADADAD'} size={25} />
            );
					}
					else if (route.name === 'Home') {
            return focused ? (
							<FocusedTabBarIcon
								tabName={3}
							/>
            ) : (
              <OcticonsIcon name="home" color={'#ADADAD'} size={25} />
            );
					}
					else if (route.name === 'Checklist') {
              return focused ? (
							<FocusedTabBarIcon
								tabName={4}
							/>
            ) : (
               <OcticonsIcon name="list-unordered"color={'#ADADAD'} size={25} />
            );
					}
					else if (route.name === 'Journal') {
              return focused ? (
							<FocusedTabBarIcon
								tabName={5}
							/>
            ) : (
               <IoniconsIcon name="journal-outline" color={'#ADADAD'} size={25} />
            );
          }
					
          return <Image source={iconSource} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: selectedMode.background,
          shadowOpacity: 0.5,
          shadowRadius: 6,
          elevation: 10,
        },
      })}
    >
      <Tab.Screen
        name="Exploration"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Trip Planning"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Checklist"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }}
			/>
			<Tab.Screen
        name="Journal"
        component={ViewAllJournalEntries}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;