import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WallScreen} from '../screens/WallScreen';
import DrawerCustom from '../components/Drawer/DrawerCustom';
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen
        name="WallScreen"
        component={WallScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
