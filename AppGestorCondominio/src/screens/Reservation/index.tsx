import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-fontawesome';
import {ReservationItem} from '../../components/ReservationItem';
import styles from './style';

export function ReservationScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Reservas Disponíveis',
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
        <TouchableOpacity style={styles.btnMyReservations} onPress={null}>
          <Text style={styles.txtBtn}>Minhas Reservas</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Selecione uma Área</Text>
        {/*{loading && <ActivityIndicator size="large" color="#8863e6" />}*/}
        {!loading && list.length === 0 && (
          <View>
            <Text style={styles.txtWarning}>Não há aŕeas disponíveis.</Text>
          </View>
        )}
        <ReservationItem />
      </ScrollView>
    </SafeAreaView>
  );
}
