import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import api from '../../Service/api';
import styles from './style';

export function AddReservation({navigation}) {
  const scroll = useRef();
  const [loading, setLoading] = useState(false);
  const [disabledDates, setDisabledDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    getTimes();
  }, [selectedDate]);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const getTimes = async () => {
    if (selectedDate) {
      const result = await api.getReservationTimes(
        route.params.data.id,
        selectedDate,
      );
      if (result.error === '') {
        setSelectedTime(null);
        setTimeList(result.list);
        setTimeout(() => {
          scroll.current.scrollToEnd();
        }, 500);
      } else {
        Alert.alert(result.error);
      }
    }
  };

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
  const handleDateChange = date => {
    let dateE1 = new Date(date);
    let year = dateE1.getFullYear();
    let month = dateE1.getMonth() + 1;
    let day = dateE1.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    setSelectedDate(`${year}-${month}-${day}`);
  };

  const showTextDate = date => {
    let dateE1 = new Date(date);
    let year = dateE1.getFullYear();
    let month = dateE1.getMonth() + 1;
    let day = dateE1.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${day}/${month}/${year}`;
  };

  const handleSave = async () => {
    if (selectedDate && selectedTime) {
      const result = await api.setReservation(
        route.params.data.id,
        selectedDate,
        selectedTime,
      );
      if (result.error === '') {
        navigation.navigate('ReservationMyScreen');
      } else {
        Alert.alert(result.error);
      }
    } else {
      Alert.alert('Selecione uma Data e Horário.');
    }
  };

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
      <ScrollView ref={scroll}>
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
        {!loading && selectedDate && (
          <>
            <Text style={styles.title}>
              Horários disponíveis em: {showTextDate(selectedDate)}
            </Text>
            <View style={styles.timeList}>
              {timeList.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedTime(item.id)}
                  active={selectedTime === item.id}
                  key={index}
                  style={styles.btn}>
                  <Text style={styles.txt} active={selectedTime === item.id}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
      {/*TODO -> ALTERAR PARA !LOADING*/}
      {loading && (
        <TouchableOpacity style={styles.btnReserva} onPress={handleSave}>
          <Text style={styles.txtReserva}>Reservar Local</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
