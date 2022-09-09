import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Login({navigation}) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require('../../assets/undraw_home.png')}
        style={{width: 400, height: 400}}
        resizeMode="contain"
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: 15,
        }}>
        <TextInput
          placeholder="Digite seu CPF"
          style={styles.input}
          value={cpf}
          onChangeText={t => setCpf(t)}
        />
        <Icon name="user" size={30} color="#8B63E7" style={{marginLeft: 5}} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Digite sua Senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={t => setPassword(t)}
        />
        <Icon name="lock" size={30} color="#8B63E7" style={{marginLeft: 5}} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ChooseProperty')}>
        <Text style={styles.txtBtn}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.txtBtnRegister}>Registrar-se</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
