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
import Icon from 'react-native-vector-icons/FontAwesome';
import {DocItem} from '../../components/DocItem';
export function DocumentScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Documentos do Condominínio',
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
        <DocItem />
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <FlatList renderItem={() => <WallItem />} />
    // </SafeAreaView>
  );
}
