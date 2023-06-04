import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons2 from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileComponent = ({ name, imageSource }) => {
  const styles = StyleSheet.create({
    account: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 20,
    },
    user: {
      fontSize: 23,
      fontWeight: '500',
      color: '#353535',
    },
  });

  return (
    <View style={styles.account}>
      {imageSource === null ? (
        <TouchableOpacity>
          <MaterialIcons2
            name="account-circle-outline"
            size={40}
            color="#A27B5C"
            style={{ marginRight: 20}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.user}>Hi, {name}!</Text>
      </View>
    </View>
  );
};

export default ProfileComponent;
