import React, { useState } from "react";
import { Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Icon name="user" size={25} color="#bf40bf" style={{marginLeft:5}}/>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TextInput
        placeholder="Digite sua Senha" 
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={t=>setPassword(t)}
      />
      <Icon name="lock" size={25} color="#bf40bf" style={{marginLeft:5}} />
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