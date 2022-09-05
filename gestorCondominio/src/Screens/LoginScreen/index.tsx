import React, { useEffect, useState } from 'react'
import {  Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useStateValue } from '../../Contexts/StateContext'
import styles from './style'
import api from '../../Services/Api'

export default ()=>{
    const navigation = useNavigation()
    // @ts-ignore
    const [context, dispatch] = useStateValue()
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginButton = async ()=>{
        if(cpf && password){
            let result = await api.login(cpf, password)
            if(result.error === ''){
                dispatch({type:'setToken', payload: {token: result.token}})
                dispatch({type:'setUser', payload: {user: result.user}})

                navigation.reset({
                    index:1,
                    routes:[{name:'ChoosePropertyScreen'}]
                })
            }else{
                alert(result.error)
            }
        }else{
            alert('Preencha os campos')
        }
    }

    const handleRegisterButton = ()=>{
        navigation.navigate('RegisterScreen')
    }


    return(
        <KeyboardAvoidingView style={styles.container}>
            <Image
                source={require('../../../assets/undraw_home.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            <TextInput
                placeholder='Digite seu CPF'
                keyboardType='numeric'
                value={cpf}
                onChangeText={t=>setCpf(t)}
                style={styles.input}
            />

            <TextInput
                placeholder='Senha'
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassword(t)}
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.btn}
                onPress={handleLoginButton}
                >
                <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.btn}
                onPress={handleRegisterButton}
                >
                <Text style={styles.txtBtn}>Cadastrar-se</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
