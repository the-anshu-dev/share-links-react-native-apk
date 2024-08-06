import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import LoginForCompany from '../screens/jobPosting/LoginForCompany';
import { Navigate } from '../utils/navigate';
import SignUpForCompany from '../screens/jobPosting/SignUpForCompany';

const Stack = createNativeStackNavigator();
const JobPostingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={Navigate.LOGIN_FOR_COMPANY} component={LoginForCompany} />
      <Stack.Screen name={Navigate.SIGNUP_FOR_COMPANY} component={SignUpForCompany} />
    </Stack.Navigator>
  );
};

export default JobPostingNavigation;
