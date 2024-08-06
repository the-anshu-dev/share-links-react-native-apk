import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigate} from '../utils/navigate';
import SplashScreen from '../screens/onBoarding/SplashScreen';
import LoginScreen from '../screens/jobPosting/LoginForCompany';
import {NavigationContainer} from '@react-navigation/native';
import JobSearchingNavigation from './JobSearchingNavigation';
import JobPostingNavigation from './JobPostingNavigation';
import SelectUser from '../screens/onBoarding/SelectUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../screens/onBoarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = React.useState(false);

  React.useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('hasSeenOnboarding');
        if (value !== null) {
          setHasSeenOnboarding(true);
        }
      } catch (e) {
        console.error('Failed to fetch onboarding status');
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!hasSeenOnboarding && (
          <Stack.Screen
            name={Navigate.ONBOARDING_SCREEN}
            component={OnboardingScreen}
          />
        )}
        <Stack.Screen name={Navigate.SELECT_USER} component={SelectUser} />
        <Stack.Screen
          name={Navigate.JOB_POSTING_NAVIGATION}
          component={JobPostingNavigation}
        />
        <Stack.Screen
          name={Navigate.JOB_SEARCHING_NAVIGATION}
          component={JobSearchingNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
