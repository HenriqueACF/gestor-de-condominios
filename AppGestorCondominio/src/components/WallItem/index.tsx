import React from 'react';
import styles from './styles';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function WallItem() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerArea}>
        <Icon name="newspaper-o" size={30} color="#8B63E7" />
        <View style={styles.infoArea}>
          <Text style={styles.title}>
            Aviso a todos os moradores do condominio golfinho
          </Text>
          <Text style={styles.date}>11/11/22</Text>
        </View>
      </View>
      <Text style={styles.txtAviso}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        accumsan arcu. Praesent id dolor eu lacus mattis euismod. Sed
        ullamcorper odio dapibus aliquam congue. Aenean at elit lorem. Praesent
        nec arcu sed ex porttitor condimentum vitae ac nibh. Sed rutrum felis
        tortor, nec tincidunt est tristique eu.{' '}
      </Text>
      <TouchableOpacity style={styles.footer}>
        <Icon
          name="heart"
          size={17}
          color="#ff0000"
          style={{marginRight: 10}}
        />
        <Text style={styles.txtBtn}>10 curtidas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
