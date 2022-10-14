import React from 'react';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import api from '../../Service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export function MyReservationItem({navigation}) {
  const handleRemoveButton = () => {
    Alert.alert('Confirmação', 'Tem certeza que deseja cancelar a reserva?', [
      {text: 'Sim, tenho certeza', onPress: removeReservation},
      {text: 'Cancelar', onPress: null, style: 'cancel'},
    ]);
  };

  const removeReservation = async () => {
    const result = await api.removeReservation(data.id);
    if (result.error === '') {
    } else {
      Alert.alert(result.error);
    }
  };

  return (
    <>
      <View style={styles.area}>
        <Image
          source={require('../../assets/academia.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <View>
            <Text style={styles.title}>Academia</Text>
            <Text style={styles.info}>Horário reservado:</Text>
            <Text style={styles.date}>31/12/22 às 16:00</Text>
          </View>
          <TouchableOpacity onPress={null} style={styles.btn}>
            <Icon name="remove" size={25} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.area}>
        <Image
          source={require('../../assets/piscina.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <View>
            <Text style={styles.title}>Piscina</Text>
            <Text style={styles.info}>Horário reservado:</Text>
            <Text style={styles.date}>31/12/22 às 16:00</Text>
          </View>
          <TouchableOpacity onPress={null} style={styles.btn}>
            <Icon name="remove" size={25} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.area}>
        <Image
          source={require('../../assets/piscina.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <View>
            <Text style={styles.title}>Piscina</Text>
            <Text style={styles.info}>Horário reservado:</Text>
            <Text style={styles.date}>31/12/22 às 16:00</Text>
          </View>
          <TouchableOpacity onPress={null} style={styles.btn}>
            <Icon name="remove" size={25} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.area}>
        <Image
          source={require('../../assets/piscina.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <View>
            <Text style={styles.title}>Piscina</Text>
            <Text style={styles.info}>Horário reservado:</Text>
            <Text style={styles.date}>31/12/22 às 16:00</Text>
          </View>
          <TouchableOpacity onPress={handleRemoveButton} style={styles.btn}>
            <Icon name="remove" size={25} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
