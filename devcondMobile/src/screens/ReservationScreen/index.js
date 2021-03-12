import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import ReservationItem from '../../components/ReservationItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Reservas Disponíveis'
        });
        getReservations();
    }, []);

    const getReservations = async () => {
        setList([]);
        setLoading(true);
        const result = await api.getReservations();
        setLoading(false);
        if(result.error === '') {
            setList(result.list);
        } else {
            alert(result.error);
        }
    }

    return (
        <C.Container>

            <C.Scroller>

                <C.ButtonArea>

                    <C.ButtonText>Minhas Reservas</C.ButtonText>

                </C.ButtonArea>

                <C.Title>Selecione uma Área</C.Title>

                {loading &&
                    <C.LoadingIcon size="large" color="#8863E6"/>
                }

                {!loading && list.length === 0 &&
                    <C.NoListArea>

                        <C.NoListText>Não há áreas disponíveis.</C.NoListText>

                    </C.NoListArea>
                }

                {list.map((item, index)=>(
                    <ReservationItem 
                       key={index}
                       data={item} 
                    />
                ))}

            </C.Scroller>

        </C.Container>
    );
}