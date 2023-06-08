import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/onBoarding/signupScreen";
import LoginScreen from "../screens/onBoarding/loginScreen";
import IntroScreen from "../screens/onBoarding/introScreen";
import ForgotPassword from "../screens/onBoarding/forgotPassword";
import ResetPassword from "../screens/onBoarding/resetPassword";
import ChangePassword from "../screens/onBoarding/changePassword";
import BottomTabNavigator from "./bottomTabNavigator";
// import ProfileScreen from "../screens/onBoarding/profileScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro Screen"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup Screen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password Screen"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset Password Screen"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Change Password Screen"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

		{/* <Stack.Screen
          name="Profile Screen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
