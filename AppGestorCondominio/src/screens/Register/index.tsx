import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../Register/style';
export function Register({navigation}) {
  const [nome, setNome] = useState('');
  const [tel, setTel] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.txt}>
        Informe seus dados para realizar o registro
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={t => setNome(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={tel}
        onChangeText={t => setTel(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={t => setCpf(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={t => setCep(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço Completo"
        value={endereco}
        onChangeText={t => setEndereco(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nº"
        value={numero}
        onChangeText={t => setNumero(t)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('RegisterFinished')}>
        <Text style={styles.txtBtn}>Finalizar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
