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

    useEffect(()=>{
        const checkPropertySel = async () =>{
            let property = await AsyncStorage.getItem('property');
            if(property){
                property = JSON.parse(property);
                //ESCOLHER PROPRIEDADE
                
            }
            setLoading(false);
        }
        checkPropertySel();
    }, []);

    const handleLogoutButton = async () =>{
        await api.logout();
        navigation.reset({
            index:1,
            routes:[{name:'LoginScreen'}]
        });
    }

    return(
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon 
                        color="#8863E6" s
                        size="large"
                    />
                }
                {!loading && context.user.user.properties.length > 0 &&
                    <>
                        <C.HeadTitle>Olá {context.user.user.name}</C.HeadTitle>
                        <C.HeadTitle>Escolha uma de suas propriedades</C.HeadTitle>

                        <C.PropertyList>
                            {context.user.user.properties.map((item, index)=>(
                                <C.ButtonArea key={index} onPress={null}>
                                    <C.ButtonText>
                                        {item.name}
                                    </C.ButtonText>
                                </C.ButtonArea>
                            ))}
                        </C.PropertyList>
                    </>
                }
                {!loading && context.user.user.properties.length <= 0 &&
                    <C.BigArea>
                        <C.HeadTitle>{context.user.user.name}, parabéns pelo cadastro!</C.HeadTitle>
                        <C.HeadTitle>Agora a administração precisa liberar o seu acesso.</C.HeadTitle>
                    </C.BigArea>
                }
            </C.Scroller>
            <C.ExitButtonArea onPress={handleLogoutButton}>
                <C.ExitButtonText>
                    Sair
                </C.ExitButtonText>
            </C.ExitButtonArea>
        </C.Container>
    );
}