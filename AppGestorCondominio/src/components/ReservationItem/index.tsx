import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export function ReservationItem() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('AddReservation');
  };

  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Image
          source={require('../../assets/academia.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>Academia</Text>
        <Text style={styles.date}>Horários de funcionamento:</Text>
        <Text style={styles.txtItems}>Seg-Sex 06:00 às 21:00</Text>
        <Text style={styles.txtItems}>Sab-Dom 06:00 às 16:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Image
          source={require('../../assets/piscina.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>Piscina</Text>
        <Text style={styles.date}>Horários de funcionamento:</Text>
        <Text style={styles.txtItems}>Seg-Sex 06:00 às 21:00</Text>
        <Text style={styles.txtItems}>Sab-Dom 06:00 às 16:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Image
          source={require('../../assets/churrasqueira.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>Churrasqueira</Text>
        <Text style={styles.date}>Horários de funcionamento:</Text>
        <Text style={styles.txtItems}>Seg-Sex 06:00 às 21:00</Text>
        <Text style={styles.txtItems}>Sab-Dom 06:00 às 16:00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Image
          source={require('../../assets/quadra.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>Quadra</Text>
        <Text style={styles.date}>Horários de funcionamento:</Text>
        <Text style={styles.txtItems}>Seg-Sex 06:00 às 21:00</Text>
        <Text style={styles.txtItems}>Sab-Dom 06:00 às 16:00</Text>
      </TouchableOpacity>
    </>
  );
}
