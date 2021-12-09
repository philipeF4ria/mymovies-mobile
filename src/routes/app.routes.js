import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { Home } from '../screens/Home';
import { Catalog } from '../screens/Catalog';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-compass',
  },
  Catalog: {
    name: 'ios-bookmark',
  },
}

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1B1B1F',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#F0F0F0',
        tabBarInactiveTintColor: '#555'
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IonIcons name="ios-compass" color={color} size={size} />
          },
          title: '',
        }}
      />
      <Tab.Screen 
        name="Catalog" 
        component={Catalog}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <IonIcons name="ios-bookmark" color={color} size={size} />
          },
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}
