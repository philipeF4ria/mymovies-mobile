import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SearchResults } from '../screens/SearchResults';

const Stack = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
}
