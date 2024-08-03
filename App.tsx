import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNaigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNaigation />
    </NavigationContainer>
  );
}