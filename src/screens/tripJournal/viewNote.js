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
} from 'react-native';
import colors from '../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ViewNote = () => {
  const selectedMode = colors['light'];
  const screenHeight = Dimensions.get('window').height;

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
            name="delete-outline"
            size={30}
            color="#D9D9D9"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 40}}>
        <View>
          <Image
            style={styles.coverImage}
            source={require('../../assets/images/journal-assets/santorini.png')}></Image>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 5,
            paddingTop: 20,
            height: '60%',
            width: '100%',
          }}>
          <Text
            style={{
              color: '#353535',
              fontSize: 15,
              lineHeight: 28,
              paddingBottom: 20,
            }}>
            As I stepped foot onto this enchanting paradise, I was instantly
            captivated by its striking landscapes, whitewashed houses, and the
            renowned blue-domed churches that adorn the cliffside. The day began
            with a refreshing breeze greeting me as I stood atop the cliffs of
            Fira, the island's main town. The panoramic view that unfolded
            before my eyes was truly breathtaking. The azure waters stretched
            out as far as the eye could see, blending seamlessly with the
            vibrant blue of the sky. The cliffs, painted in shades of white and
            beige, created a stark contrast against the deep blue sea—a sight I
            will forever cherish. Eager to delve deeper into the island's
            allure, I embarked on a journey to explore the renowned village of
            Oia, known for its postcard-worthy sunsets. The narrow cobblestone
            streets led me through a maze of shops, boutiques, and art
            galleries, each exuding their own unique charm. As I stepped foot
            onto this enchanting paradise, I was instantly captivated by its
            striking landscapes, whitewashed houses, and the renowned blue-domed
            churches that adorn the cliffside. The day began with a refreshing
            breeze greeting me as I stood atop the cliffs of Fira, the island's
            main town. The panoramic view that unfolded before my eyes was truly
            breathtaking. The azure waters stretched out as far as the eye could
            see, blending seamlessly with the vibrant blue of the sky. The
            cliffs, painted in shades of white and beige, created a stark
            contrast against the deep blue sea—a sight I will forever cherish.
            Eager to delve deeper into the island's allure, I embarked on a
            journey to explore the renowned village of Oia, known for its
            postcard-worthy sunsets. The narrow cobblestone streets led me
            through a maze of shops, boutiques, and art galleries, each exuding
            their own unique charm. As I stepped foot onto this enchanting
            paradise, I was instantly captivated by its striking landscapes,
            whitewashed houses, and the renowned blue-domed churches that adorn
            the cliffside. The day began with a refreshing breeze greeting me as
            I stood atop the cliffs of Fira, the island's main town. The
            panoramic view that unfolded before my eyes was truly breathtaking.
            The azure waters stretched out as far as the eye could see, blending
            seamlessly with the vibrant blue of the sky. The cliffs, painted in
            shades of white and beige, created a stark contrast against the deep
            blue sea—a sight I will forever cherish. Eager to delve deeper into
            the island's allure, I embarked on a journey to explore the renowned
            village of Oia, known for its postcard-worthy sunsets. The narrow
            cobblestone streets led me through a maze of shops, boutiques, and
            art galleries, each exuding their own unique charm.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ViewNote;
