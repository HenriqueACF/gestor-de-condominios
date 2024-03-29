import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WallScreen} from '../screens/WallScreen';
import DrawerCustom from '../components/Drawer/DrawerCustom';
import {DocumentScreen} from '../screens/Documents';
import {BilletScreen} from '../screens/Billet';
import {WarningScreen} from '../screens/Warning';
import {AddWarningScreen} from '../screens/AddWarning';
import {ReservationScreen} from '../screens/Reservation';
import {AddReservation} from '../screens/AddReservation';
import {MyReservation} from '../screens/MyReservation';
import { FoundAndLost } from '../screens/FoundAndLost';
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
      <Drawer.Screen name="AddWarningScreen" component={AddWarningScreen} />
      <Drawer.Screen name="ReservationScreen" component={ReservationScreen} />
      <Drawer.Screen name="AddReservation" component={AddReservation} />
      <Drawer.Screen name="MyReservation" component={MyReservation} />
        <Drawer.Screen name="FoundAndLost" component={FoundAndLost} />
    </Drawer.Navigator>
  );
}
