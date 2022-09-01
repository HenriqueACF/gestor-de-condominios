import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {StateProvider} from "./src/Contexts/StateContext";

export default function App() {
  return (
      <StateProvider>
        <View style={styles.container}>
          <Text>oi</Text>
          <StatusBar style="auto" />
        </View>
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
