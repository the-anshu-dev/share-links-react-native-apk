import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigate} from '../utils/navigate';
import SplashScreen from '../screens/onBoarding/SplashScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/jobPosting/LoginForCompany';
import {NavigationContainer} from '@react-navigation/native';
import JobSearchingNavigation from './JobSearchingNavigation';
import JobPostingNavigation from './JobPostingNavigation';
import SelectUser from '../screens/onBoarding/SelectUser';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName={Navigate.SPLASH_SCREEN}
        >

        <Stack.Screen name={Navigate.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={Navigate.SELECT_USER} component={SelectUser} />
        <Stack.Screen name={Navigate.JOB_POSTING_NAVIGATION} component={JobPostingNavigation} />
        <Stack.Screen name={Navigate.JOB_SEARCHING_NAVIGATION} component={JobSearchingNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;

// <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Navigate.SPLASH_SCREEN}>
// <Stack.Screen name={Navigate.SPLASH_SCREEN} component={SplashScreen} />
// <Stack.Screen name={Navigate.ONBOARDING_SCREEN} component={OnboardingScreen} />
// <Stack.Screen name={Navigate.LOGIN_SCREEN} component={LoginScreen} />
// </Stack.Navigator>
