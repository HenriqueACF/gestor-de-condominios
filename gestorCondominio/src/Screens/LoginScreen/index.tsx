import React, { useEffect, useState } from 'react'
import {  Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useStateValue } from '../../Contexts/StateContext'
import styles from './style'
// import api from '../../Services/Api'

export default ()=>{
    const navigation = useNavigation()
    const [context, dispatch] = useStateValue()
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')


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

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Cadastrar-se</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
