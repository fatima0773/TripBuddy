import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      velocity: 7,
      tension: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate('Intro Screen'); // Replace 'Exploration' with the actual screen name in your stack navigation
    }, 5000);

    return () => clearTimeout(timer);
  }, [bounceAnim, navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    imageBg: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 230,
      width: 230,
      transform: [{ scale: bounceAnim }],
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25605C" />
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.imageBg}
        resizeMode="cover">
        <ImageBackground
          style={[styles.imageBg, { marginVertical: 30 }]}
          resizeMode="contain"
          source={require('../../assets/images/path.png')}>
          <Animated.Image
            style={styles.image}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
