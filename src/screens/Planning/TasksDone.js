import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  SafeAreaView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const TasksDone = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    image: {
      width: Dimensions.get('window').width,
      height: 350,
    },
    arrowContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    details: {
      position: 'absolute',
      bottom: 0,
      marginHorizontal: 20,
      paddingBottom: 40,
      width: '90%',
      height: '75%',
      backgroundColor: 'white',
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
      justifyContent: 'space-between',
     
    },
    detailsView: {
      margin: 30,
      flex: 1
    },
    destinationName: {
      color: '#274B47',
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    date: {
      color: '#353535',
      fontSize: 18,
    },
    icon: {
      padding: 10,
    },
    heading: {
      fontSize: 30,
      color: '#25605C',
      fontWeight: '500',
      marginBottom: 30,
      marginTop: 30,
      alignSelf: 'center',
    },
    button: {
      backgroundColor: '#25605C',
      width: '90%',
      height: 56,
      justifyContent: 'center',
      alignSelf: 'center',
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
    line: {
      width: 1.5,
      backgroundColor: '#969090',
      height: 50,
      marginRight: 30,
      marginLeft: 9,
    },
    taskHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    taskHeaderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '60%',
    },
    taskTitle: {
      color: '#274B47',
      fontSize: 20,
      fontWeight: '500',
    },
    taskTime: {
      color: '#969090',
      fontSize: 18,
    },
    taskDescription: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      justifyContent: 'space-between',
    },
    taskDescriptionLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '62%',
    },
    line: {
      width: 1.5,
      backgroundColor: '#969090',
      height: 50,
      marginRight: 30,
      marginLeft: 9,
    },
    taskDescriptionText: {
      color: '#969090',
      fontSize: 18,
    },
    taskDescriptionRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  const OnPress = () => {
    alert('Button Pressed');
  };

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Breakfast Time',
      time: '10:00 am',
      description: 'Eat time with family',
    },
    {
      id: '2',
      title: 'Lunch Time',
      time: '1:00 pm',
      description: 'Enjoy a delicious meal',
    },
    {
      id: '3',
      title: 'Dinner Time',
      time: '7:00 pm',
      description: 'Have a satisfying dinner',
    },
    {
      id: '4',
      title: 'Meeting',
      time: '2:30 pm',
      description: 'Attend an important meeting',
    },
    {
      id: '5',
      title: 'Exercise',
      time: '6:00 am',
      description: 'Do some morning exercises',
    },
    {
        id: '6',
        title: 'Breakfast Time',
        time: '10:00 am',
        description: 'Eat time with family',
      },
      {
        id: '7',
        title: 'Lunch Time',
        time: '1:00 pm',
        description: 'Enjoy a delicious meal',
      },
      {
        id: '8',
        title: 'Dinner Time',
        time: '7:00 pm',
        description: 'Have a satisfying dinner',
      },
      {
        id: '9',
        title: 'Meeting',
        time: '2:30 pm',
        description: 'Attend an important meeting',
      },
      {
        id: '10',
        title: 'Exercise',
        time: '6:00 am',
        description: 'Do some morning exercises',
      },
    
  ]);

  const renderTask = ({item}) => (
    <View>
      <View style={styles.taskHeader}>
        <View style={styles.taskHeaderLeft}>
          <MaterialIcons
            name="circle"
            size={20}
            color="#DCD7C9"
            style={{marginRight: 20}}
          />
          <Text style={styles.taskTitle}>{item.title}</Text>
        </View>
        <Text style={styles.taskTime}>{item.time}</Text>
      </View>

      <View style={styles.taskDescription}>
        <View style={styles.taskDescriptionLeft}>
          <View style={styles.line} />
          <Text style={styles.taskDescriptionText}>{item.description}</Text>
        </View>

    
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{height: 350}}>
        <Image
          source={require('../../assets/images/map.png')}
          style={styles.image}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={45}
            color="#274B47"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.detailsView}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.destinationName}>Hunza Valley</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="#353535"
                style={{paddingRight: 10}}
              />
              <Text style={styles.date}>
                July 9 - July 19
                <Text style={{fontStyle: 'italic'}}> - 9 days</Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Tasks Done</Text>
            {/* Tasks View */}
            <SafeAreaView style={{marginBottom: 220}}>
              <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={renderTask}
              />
            </SafeAreaView>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default TasksDone;
