import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IRootParamlist } from '../interfaces/links.interface';

import Main from '../screens/main/main';

function Navigation() {
  const Stack = createNativeStackNavigator<IRootParamlist>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Main}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
