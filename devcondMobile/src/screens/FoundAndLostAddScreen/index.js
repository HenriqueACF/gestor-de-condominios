import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import DocItem from '../../components/DocItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

   const [photo, setPhoto] = useState({});
   const [description, setDescription] = useState('');
   const [where, setWhere] = useState('');

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Adicionar um item perdido'
        });
    }, []);



    return (
        <C.Container>
            <C.Scroller>
                <C.PhotoArea>

                </C.PhotoArea>

                <C.Title>Descreva o item:</C.Title>
                <C.Field
                    placeholder="Ex: Carteira cinza"
                    value={description}
                    onChangeText={t=>setDescription(t)}
                />

                <C.Title>Local onde foi encontrado:</C.Title>
                <C.Field
                    placeholder="Ex: No pátio do bloco A"
                    value={where}
                    onChangeText={t=>setWhere(t)}
                />

                <C.ButtonArea onPress={null}>
                    <C.ButtonText>Salvar</C.ButtonText>
                </C.ButtonArea>
            </C.Scroller>
        </C.Container>
    );
}