import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function LoadingView() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1B1B1F',
      }}
    >
      <ActivityIndicator size={56} color="#DC1637"/>
    </View>
  );
}
