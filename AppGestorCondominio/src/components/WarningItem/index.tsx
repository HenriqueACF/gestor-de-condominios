import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
export function WarningItem({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = () => {
    setModalImage();
    setShowModal(true);
  };

  return (
    <View style={styles.btn}>
      <Text style={styles.txtData}>12-09-22</Text>
      <Text style={styles.txtTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
        volutpat nunc, nec tincidunt ante.
      </Text>
      <View style={styles.statusArea}>
        <Icon name="inbox" size={24} color="#8B63E7" />
        <Text style={styles.txtStatus}>Fechada</Text>
      </View>
      <View style={styles.areaPhoto}>
        <ScrollView horizontal>
          <TouchableOpacity
            style={styles.photoItem}
            onPress={() => openModal()}>
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
            <Image
              source={require('../../assets/ocorrencia.webp')}
              resizeMode="cover"
              style={styles.image}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Modal animationType="fade" transpoate="true" visible={showModal}>
        <View style={styles.modalArea}>
          <Image
            source={require('../../assets/ocorrencia.webp')}
            resizeMode="contain"
            style={styles.modalImage}
          />
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.btnClose}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
