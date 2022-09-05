import createNativeStackNavigator from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen'
import PreloadScreen from '../Screens/PreloadScreen/Index'
const Stack = createNativeStackNavigator()

export default () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='PreloadScreen'
                component={PreloadScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>

    )
}
