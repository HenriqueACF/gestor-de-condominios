import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StateProvider} from './src/contexts/StateContext';

export default () => {
  return (
    <StateProvider>
      <SafeAreaView>
        <Text>Oi</Text>
      </SafeAreaView>
    </StateProvider>
  );
};
