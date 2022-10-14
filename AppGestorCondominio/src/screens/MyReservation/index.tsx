import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyReservationItem} from '../../components/MyReservationItem';
import api from '../../Service/api';
import styles from './style';

export function MyReservation({navigation}) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Minhas Reservas',
      headerStyle: {
        backgroundColor: '#f5f6fa',
        shadowOpacity: 0,
        elevation: 0,
      },
    });
    getList();
  }, []);

  const getList = async () => {
    setList([]);
    setLoading(true);
    const result = await api.getMyReservation();
    setLoading(false);
    if (result.error === '') {
      setList(result.list);
    } else {
      Alert.alert(result.error);
    }
  };
  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView>
        {/*{!loading && list.length > 0 && (*/}
        {/*  <View>*/}
        {/*    <Text>Não há reservas.</Text>*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*<FlatList*/}
        {/*  data={list}*/}
        {/*  onRefresh={getList}*/}
        {/*  refreshing={loading}*/}
        {/*  renderItem={({item}) => <MyReservationItem data={item} />}*/}
        {/*  keyExtractor={item => item.id.toString()}*/}
        {/*  style={styles.list}*/}
        {/*/>*/}
        <MyReservationItem />
      </ScrollView>
    </SafeAreaView>
  );
}
