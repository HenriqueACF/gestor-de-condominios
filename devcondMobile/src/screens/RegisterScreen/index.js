import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () =>{

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    
    //states
    const [name,setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');    

    useEffect(()=>{
        navigation.setOptions({
            headerTitle:'Fazer cadastro'
        })
    }, [])

    return(
        <C.Container>

            <C.Field
                placeholder="Digite seu Nome"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />

            <C.Field
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={t=>setEmail(t)}
            />

            <C.Field
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassword(t)}
            />

            <C.Field
                placeholder="Digite sua Senha novamente"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={t=>setPasswordConfirm(t)}
            />

            
            <C.ButtonArea onPress={null}>
                <C.ButtonAreaText>Cadastrar-se</C.ButtonAreaText>
            </C.ButtonArea>
            
        </C.Container>
    );
}