import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';


export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', ()=>{
            navigation.setOptions({
                headerTitle: `Reservar ${route.params.data.title}`
            });
        });
        return unsubscribe;
    }, [navigation, route]);

    //Data Minima
    const minDate = new Date();
    //Data Maxima
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const handleDateChange = () =>{

    }

    return (
        <C.Container>

            <C.Scroller contentContainerStyle={{paddingBottom:40}}>
                <C.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" />

                {loading && 
                    <C.LoadingIcon size='large' color='#8863E6' />
                }

                {!loading  &&
                    <C.CalendarArea>
                        <CalendarPicker
                            onDateChange={handleDateChange}
                            minDate={minDate}
                            maxDate={maxDate}
                            weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']}
                            months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                            previousTitle='Anterior'
                            nextTitle='Próximo'
                            selectedDayColor='#8863E6'
                            selectedDayTextColor='#FFF'
                            todayBackgroundColor='transparent'
                            todayTextStyle='#000'
                        />
                    </C.CalendarArea>
                }

            </C.Scroller>

        </C.Container>
    );
}