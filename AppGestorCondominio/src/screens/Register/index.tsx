import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Register/style';
export function Register({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const [tel, setTel] = useState('');
  const [cpf, setCpf] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.txt}>
        Informe seus dados para realizar o registro
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="user" size={30} color="#8B63E7" style={{marginRight: 2}} />
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={t => setNome(t)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="user" size={30} color="#8B63E7" style={{marginRight: 5}} />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={t => setCpf(t)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="user" size={30} color="#8B63E7" style={{marginRight: 5}} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={t => setEmail(t)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="lock" size={30} color="#8B63E7" style={{marginRight: 5}} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={t => setSenha(t)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="lock" size={30} color="#8B63E7" style={{marginRight: 5}} />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={senhaConfirma}
          onChangeText={t => setSenhaConfirma(t)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name="phone" size={30} color="#8B63E7" style={{marginRight: 5}} />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={tel}
          onChangeText={t => setTel(t)}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('RegisterFinished')}>
        <Text style={styles.txtBtn}>Cadastrar-se</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
