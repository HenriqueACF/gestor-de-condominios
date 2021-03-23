import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import UnitPeopleSection from '../../components/UnitPeopleSection';
import UnitVehicleSection from '../../components/UnitVehicleSection';
import UnitPetSection from '../../components/UnitPetSection';


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
                        <C.TitleArea>
                            <C.Title>Moradores</C.Title>
                            <C.TitleAddButton onPress={null}>
                                <Icon name='plus' size={24} color='#000'/>
                            </C.TitleAddButton>
                        </C.TitleArea>

                        <C.ListArea>
                            <UnitPeopleSection 
                                list={peopleList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>

                        <C.TitleArea>
                            <C.Title>Veículos</C.Title>
                            <C.TitleAddButton onPress={null}>
                                <Icon name='plus' size={24} color='#000'/>
                            </C.TitleAddButton>
                        </C.TitleArea>

                        <C.ListArea>
                            <UnitVehicleSection 
                                list={vehicleList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>

                        <C.TitleArea>
                            <C.Title>Pets</C.Title>
                            <C.TitleAddButton onPress={null}>
                                <Icon name='plus' size={24} color='#000'/>
                            </C.TitleAddButton>
                        </C.TitleArea>

                        <C.ListArea>
                            <UnitPetSection 
                                list={petList}
                                refreshFunction={getUnitInfo}
                            />
                        </C.ListArea>
                    </>
                }
            </C.Scroller>           
        </C.Container>
    );
}