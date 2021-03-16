import React, { useEffect, useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';


export default () => {
    const scroll = useRef();
    const navigation = useNavigation();
    const route = useRoute();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [disabledDates, setDisabledDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeList, setTimeList] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', ()=>{
            navigation.setOptions({
                headerTitle: `Reservar ${route.params.data.title}`
            });
            getDisabledDates();
        });
        return unsubscribe;
    }, [navigation, route]);

    useEffect(()=>{
        getTimes();
    }, [selectedDate]);

    //Data Minima
    const minDate = new Date();
    //Data Maxima
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const getTimes = async () =>{
        if(selectedDate){
            const result = await api.getReservationTimes(
                route.params.data.id,
                selectedDate
            );
            if(result.error === ''){
                setSelectedTime(null);
                setTimeList(result.list);
                setTimeout(()=>{
                    scroll.current.scrollToEnd();
                }, 500);
            }else{
                alert(result.error);
            }
        }
    }

    const getDisabledDates = async () =>{
        setDisabledDates([]);
        setTimeList([]);
        setSelectedDate(null);
        setSelectedTime(null);
        setLoading(true);
        const result = await api.getDisabledDates(route.params.data.id);
        setLoading(false);
        if(result.error === ''){
            let dateList = [];
            for(let i in result.list){
                dateList.push(new Date(result.list[i]));
            }
            setDisabledDates(dateList);
        }else{
            alert(result.error);
        }
    }

    const handleDateChange = (date) =>{
        let dateE1 = new Date(date);
        let year = dateE1.getFullYear();
        let month = dateE1.getMonth() + 1;
        let day = dateE1.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        setSelectedDate(`${year}-${month}-${day}`);
    }

    const showTextDate = (date) => {
        let dateE1 = new Date(date);
        let year = dateE1.getFullYear();
        let month = dateE1.getMonth() + 1;
        let day = dateE1.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        return `${day}/${month}/${year}`;
    }

    return (
        <C.Container>

            <C.Scroller ref={scroll} contentContainerStyle={{paddingBottom:40}}>
                <C.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" />

                {loading && 
                    <C.LoadingIcon size='large' color='#8863E6' />
                }

                {!loading &&
                    <C.CalendarArea>
                        <CalendarPicker
                            onDateChange={handleDateChange}
                            disabledDates={disabledDates}
                            minDate={minDate}
                            maxDate={maxDate}
                            weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']}
                            months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                            previousTitle="Anterior"
                            nextTitle="Próximo"
                            selectedDayColor="#8863E6"
                            selectedDayTextColor="#FFFFFF"
                            todayBackgroundColor="transparent"
                            todayTextStyle="#000000"
                        />
                    </C.CalendarArea>
                }

                {!loading && selectedDate &&
                    <>
                        <C.Title>Horários disponíveis em {showTextDate(selectedDate)}:</C.Title>

                        <C.TimeListArea>
                            {timeList.map((item, index)=>(
                                <C.TimeItem 
                                    key={index} 
                                    onPress={()=>setSelectedTime(item.id)}
                                    active={selectedTime === item.id}
                                >
                                    <C.TimeItemText
                                        active={selectedTime === item.id}
                                    >{item.title}</C.TimeItemText>
                                </C.TimeItem>
                            ))}
                        </C.TimeListArea>
                    </>
                }

            </C.Scroller>

        </C.Container>
    );
}