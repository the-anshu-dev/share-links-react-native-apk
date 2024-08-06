import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import LoginForCompany from '../screens/jobPosting/LoginForCompany';
import { Navigate } from '../utils/navigate';
import SignUpForCompany from '../screens/jobPosting/SignUpForCompany';
import ForgotPasswordForCompany from '../screens/jobPosting/ForgotPasswordForCompany';

const Stack = createNativeStackNavigator();
const JobPostingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={Navigate.LOGIN_FOR_COMPANY} component={LoginForCompany} />
      <Stack.Screen name={Navigate.SIGNUP_FOR_COMPANY} component={SignUpForCompany} />
      <Stack.Screen name={Navigate.FORGOT_PASSWORD_FOR_COMPANY} component={ForgotPasswordForCompany} />
    </Stack.Navigator>
  );
};

export default JobPostingNavigation;
