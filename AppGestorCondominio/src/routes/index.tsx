import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {ChooseProperty} from '../screens/ChooseProperty';
import {RegisterFinished} from '../screens/Register/Finished';
import MainDrawer from '../stack/MainDrawer';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterFinished"
        component={RegisterFinished}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChooseProperty"
        component={ChooseProperty}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
