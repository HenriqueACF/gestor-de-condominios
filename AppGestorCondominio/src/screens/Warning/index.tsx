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
import {WarningItem} from '../../components/WarningItem';
import Icon from 'react-native-vector-icons/FontAwesome';
export function WarningScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Livro de Ocorrências',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('WarningAddScreen')}>
          <Icon name="plus" size={24} color="#000" style={{marginRight: 15}} />
        </TouchableOpacity>
      ),
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
        <WarningItem />
        <WarningItem />
        <WarningItem />
        <WarningItem />
        <WarningItem />
        <WarningItem />
        <WarningItem />
        <WarningItem />
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <FlatList renderItem={() => <WallItem />} />
    // </SafeAreaView>
  );
}
