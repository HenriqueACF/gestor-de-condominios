import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera} from 'react-native-image-picker';
import api from '../../Service/api';

export function AddWarningScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [warnText, setWarnText] = useState('');
  const [photoList, setPhotoList] = useState([]);

  const handleAddPhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280,
      },
      async response => {
        if (!response.didCancel) {
          setLoading(true);
          let result = await api.addWarningFile(response);
          setLoading(false);
          if (result.error === '') {
            let list = [...photoList];
            list.push(result.photo);
            setPhotoList(list);
          } else {
            Alert.alert(result.error);
          }
        }
      },
    );
  };

  const handleDelPhoto = url => {
    let list = [...photoList];
    list = list.filter(value => value !== url);
    setPhotoList(list);
  };

  const handleSaveWarn = async () => {
    if (warnText !== '') {
      const result = await api.addWarning(warnText, photoList);
      if (result.error === '') {
        navigation.navigate('WarningScreen');
      } else {
        Alert.alert(result.error);
      }
    } else {
      Alert.alert('Descreva a ocorrência');
    }
  };

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
            <TouchableOpacity onPress={handleAddPhoto} style={styles.btnIcon}>
              <Icon name="camera" size={24} color="#8B63E7" />
            </TouchableOpacity>
            {photoList.map((item, index) => {
              <View key={index} style={styles.photoItem}>
                <Image source={{uri: item}} style={styles.image} />
                <TouchableOpacity
                  onPress={handleDelPhoto}
                  style={styles.btnDel}>
                  <Icon name="remove" size={16} color="#ff0000" />
                </TouchableOpacity>
              </View>;
            })}
          </ScrollView>
        </View>
        {loading && <Text style={styles.txtLoading}>Enviando foto...</Text>}
        <TouchableOpacity onPress={handleSaveWarn} style={styles.btn}>
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
