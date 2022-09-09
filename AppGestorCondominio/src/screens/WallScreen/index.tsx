import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export function WallScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 20,
          paddingBottom: 40,
        }}>
        <Text style={styles.txt}>Olá, Henrique, selecione uma propriedade</Text>
        <Icon name="home" size={35} color="#8B63E7" style={{marginLeft: 5}} />
      </View>
    </SafeAreaView>
  );
}
