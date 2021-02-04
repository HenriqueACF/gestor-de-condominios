import React, { useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () =>{
    const navigation = useNavigation();
    const [ context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);



    return(
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon 
                        color="#8863E6" s
                        size="large"
                    />
                }
                
            </C.Scroller>
        </C.Container>
    );
}