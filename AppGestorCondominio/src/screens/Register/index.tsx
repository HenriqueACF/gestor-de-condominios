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
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={t => setNome(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={t => setCpf(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={t => setSenha(t)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={senhaConfirma}
        onChangeText={t => setSenhaConfirma(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={tel}
        onChangeText={t => setTel(t)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('RegisterFinished')}>
        <Text style={styles.txtBtn}>Cadastrar-se</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
