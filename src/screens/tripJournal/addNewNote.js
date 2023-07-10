import {useState} from 'react';
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

const NewNote = () => {
  const [value, onChangeText] = useState('');
  const selectedMode = colors['light'];

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: selectedMode.background,
      flex: 1,
      padding: 20,
    },
    heading: {
      fontSize: 30,
      color: selectedMode.primaryDark,
      fontFamily: 'Poppins-Medium',
    },
    coverImage: {
      height: 300,
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
      <View style={styles.rowContainer}>
        <Text style={styles.heading}>July 17th, 2022</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="done-outline"
            size={30}
            color="#D9D9D9"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 40}}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.coverImage}
              source={require('../../assets/images/add.png')}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 5,
            paddingTop: 20,
            height: '60%',
            width: '100%',
          }}>
          <TextInput
            editable
            multiline
            placeholder= "Write all about your travel Adventures"
            placeholderTextColor="#999"
            onChangeText={text => onChangeText(text)}
            value={value}
            style={{
              color: '#353535',
              fontSize: 15,
              lineHeight: 28,
              paddingBottom: 20,
            }}></TextInput>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewNote;
