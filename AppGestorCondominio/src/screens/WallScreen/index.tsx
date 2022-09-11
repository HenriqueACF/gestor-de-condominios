import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import WallItem from '../../components/WallItem';
import Icon from 'react-native-vector-icons/FontAwesome';

export function WallScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mural de Avisos',
      headerStyle: {
        backgroundColor: '#f5f6fa',
        shadowOpacity: 0,
        elevation: 0,
      },
    });
  });
  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView>
        <WallItem />
        <WallItem />
        <WallItem />
        <WallItem />
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <FlatList renderItem={() => <WallItem />} />
    // </SafeAreaView>
  );
}
