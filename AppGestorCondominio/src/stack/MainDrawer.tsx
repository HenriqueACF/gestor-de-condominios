import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WallScreen} from '../screens/WallScreen';
import DrawerCustom from '../components/Drawer/DrawerCustom';
import {DocumentScreen} from '../screens/Documents';
import {BilletScreen} from '../screens/Billet';
import {WarningScreen} from '../screens/Warning';
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#f5f6fa',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
      <Drawer.Screen name="DocumentScreen" component={DocumentScreen} />
      <Drawer.Screen name="BilletScreen" component={BilletScreen} />
      <Drawer.Screen name="WarningScreen" component={WarningScreen} />
    </Drawer.Navigator>
  );
}
