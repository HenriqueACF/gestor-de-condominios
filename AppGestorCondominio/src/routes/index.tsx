import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from '../screens/Login/index'

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}