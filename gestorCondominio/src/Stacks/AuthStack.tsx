import {createNativeStackNavigator} from '@react-navigation/native-stack'
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
        </Stack.Navigator>

    )
}
