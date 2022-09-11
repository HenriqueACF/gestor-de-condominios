import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
export function DocItem({navigation}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Icon name="file-text" size={30} color="#8B63E7" />
      <Text style={styles.txt}>Normas & Regras</Text>
    </TouchableOpacity>
  );
}
