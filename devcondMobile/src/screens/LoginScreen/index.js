import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () =>{

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    return(
        <C.Container>
            <C.Texto>
                Tela de Login
            </C.Texto>
        </C.Container>
    );
}