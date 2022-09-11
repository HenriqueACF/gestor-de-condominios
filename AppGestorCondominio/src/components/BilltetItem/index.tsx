import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
export function BilletItem({navigation}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Icon name="file-text" size={30} color="#8B63E7" />
      <Text style={styles.txt}>Boleto de Setembro/22</Text>
    </TouchableOpacity>
  );
}
