import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';


export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [ peopleList, setPeopleList] = useState([]);
    const [vehicleList, setVehicleLits] = useState([]);
    const [petList, setPetList] = useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: `Dados da unidade (${context.user.property.name})`
        });
        getUnitInfo();
    }, []);

    const getUnitInfo = async () => {
        setLoading(true);
        const result = await api.getUnitInfo();
        setLoading(false);
        if(result.error === '') {
            setPeopleList(result.peoples);
            setVehicleLits(result.vehicles);
            setPetList(result.pets);
        } else {
            alert(result.error);
        }
    }

    return (
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon color="#8B63E7" size="large" />
                }

                {!loading &&
                    <>
                    </>
                }
            </C.Scroller>           
        </C.Container>
    );
}