import React, { useState } from "react";
import { Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View } from "react-native";
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export function Login({navigation}) {
const [cpf, setCpf] = useState('')
const [password, setPassword] = useState('')


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require('../../assets/undraw_home.png')} style={{width:400, height:400}} resizeMode='contain'/>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TextInput 
        placeholder="Digite seu CPF"
        style={styles.input}
        value={cpf}
        onChangeText={t=>setCpf(t)}
        />
        <FontAwesomeIcon icon={faUser} size={35} color={'#bf40bf'} style={{marginLeft:5}}/>
  
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TextInput
        placeholder="Digite sua Senha" 
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={t=>setPassword(t)}
      />
      <FontAwesomeIcon icon={ faLock } size={35} color={'#bf40bf'} style={{marginLeft:5}}/>
      </View>
      <TouchableOpacity 
        style={styles.btn}
        onPress={()=> navigation.navigate('Home')}
        >
        <Text style={styles.txtBtn}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}