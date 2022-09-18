import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
export function AddWarningScreen({navigation}) {
  const [warnText, setWarnText] = useState('');
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Adicionar uma Ocorrência',
      headerStyle: {
        backgroundColor: '#f5f6fa',
        shadowOpacity: 0,
        elevation: 0,
      },
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1, padding: 20}}>
        <Text style={styles.txt}>Descreva a Ocorrência</Text>
        <TextInput
          placeholder="Digite aqui"
          value={warnText}
          onChangeText={t => setWarnText(t)}
          style={styles.input}
        />
        <Text style={styles.txt}>Fotos relacionadas</Text>
        <View style={styles.photoArea}>
          <ScrollView horizontal>
            <TouchableOpacity onPress={null} style={styles.btnIcon}>
              <Icon name="camera" size={24} color="#8B63E7" />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={null} style={styles.btn}>
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
