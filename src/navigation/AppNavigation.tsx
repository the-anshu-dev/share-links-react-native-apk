import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Navigate } from '../utils/navigate';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';

 

const Stack = createNativeStackNavigator();

const AppNaigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Navigate.SPLASH_SCREEN}>
      <Stack.Screen name={Navigate.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={Navigate.ONBOARDING_SCREEN} component={OnboardingScreen} />
      <Stack.Screen name={Navigate.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default AppNaigation;
