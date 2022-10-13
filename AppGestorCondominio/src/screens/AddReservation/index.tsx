import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import api from '../../Service/api';
import styles from './style';

export function AddReservation({navigation}) {
  const [loading, setLoading] = useState(false);
  const [disabledDates, setDisabledDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const getDisabledDates = async () => {
    setDisabledDates([]);
    setTimeList([]);
    setSelectedDate(null);
    setSelectedTime(null);
    setLoading(true);
    /* const result = await api.getDisabledDates(route.params.data.id);
    setLoading(false)
    if(result.error === '') {
      let dateList = []
      for(let i in result.list){
        dateList.push(new Date(result.list[i]))
      }
      setDisabledDates(dateList)
    } else{
      Alert.alert(result.error);
    }
     */
  };
  const handleDateChange = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Reservar',
      headerStyle: {
        backgroundColor: '#f5f6fa',
        shadowOpacity: 0,
        elevation: 0,
      },
    });
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={require('../../assets/academia.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
        {loading && (
          <ActivityIndicator
            size="large"
            color="#8863e6"
            style={styles.loading}
          />
        )}
        {!loading && (
          <View style={styles.calendarArea}>
            <CalendarPicker
              onDateChange={handleDateChange}
              disabledDates={disabledDates}
              minDate={minDate}
              maxDate={maxDate}
              weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
              previousTitle="Anterior"
              nextTitle="Próximo"
              selectedDayColor="#8863e6"
              selectedDayTextColor="#fff"
              todayBackgroundColor="transparent"
              todayTextStyle="#000"
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
