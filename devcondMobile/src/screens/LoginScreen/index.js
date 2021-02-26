import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () =>{

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    return(
        <C.Container>
            <C.Logo
                source={require('../../assets/undraw_home.png')}
                resizeMode="contain"
            />

            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />

            <C.Field
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassword(t)}
            />

            <C.ButtonArea onPress={null}>
                <C.ButtonAreaText>Entrar</C.ButtonAreaText>
            </C.ButtonArea>

            <C.ButtonArea onPress={null}>
                <C.ButtonAreaText>Cadastrar-se</C.ButtonAreaText>
            </C.ButtonArea>
            
        </C.Container>
    );
}