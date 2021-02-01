import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

useEffect(()=>{
    navigation.setOptions({
        headerTitle: 'Fazer cadastro'
    });
}, [])

export default () =>{
    const navigation = useNavigation();
    const [ context, dispatch] = useStateValue();

    const [ name, setName] = useState('');
    const [ cpf, setCpf] = useState('');
    const [ email, setEmail] = useState('');
    const [ password,setPassword]  = useState('')
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    return(
        <C.Container>

        <C.Field 
            placeholder="Digite seu nome"
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
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={t=>setPassword(t)}
          />

        <C.Field 
            placeholder="Digite sua senha novamente"
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={t=>setPasswordConfirm(t)}
          />

          <C.ButtonArea onPress={null}>
              <C.ButtonText>Cadastrar-se</C.ButtonText>
          </C.ButtonArea>

        </C.Container>
    );
}