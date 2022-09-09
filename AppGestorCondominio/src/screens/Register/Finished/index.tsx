import React from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export function RegisterFinished({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.txt}>Tela de registro finalizado</Text>
      <Text style={styles.subTxt}>
        Seu cadastro foi finalizado com sucesso!
      </Text>
      <Text style={styles.subTxt}>
        Vá para a tela de login e realize seu primeiro acesso
      </Text>
      <Icon name="check" size={100} color="#8B63E7" style={styles.icon} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txtBtn}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
