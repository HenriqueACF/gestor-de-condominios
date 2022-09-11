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
import {BilletItem} from '../../components/BilltetItem';
export function BilletScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Boletos',
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
        <BilletItem />
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <FlatList renderItem={() => <WallItem />} />
    // </SafeAreaView>
  );
}
