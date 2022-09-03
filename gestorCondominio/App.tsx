import {StateProvider} from "./src/Contexts/StateContext";
import AuthStack from "./src/Stacks/AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";

export default function App() {
  return (
      <StateProvider>
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
      </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
