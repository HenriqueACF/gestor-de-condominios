import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DrawerCustom(props) {
  const navigation = useNavigation();
  const menus = [
    {title: 'Mural de Avisos', icon: 'inbox', screen: 'WallScreen'},
    {title: 'Documentos', icon: 'file-text', screen: 'DocumentScreen'},
    {title: 'Reservas', icon: 'calendar', screen: 'ReservationScreen'},
    {title: 'Livro de Ocorrências', icon: 'bug', screen: 'WarningScreen'},
    {title: 'Achados e Perdidos', icon: 'search', screen: 'FoundAndLost'},
    {title: 'Boletos', icon: 'wpforms', screen: 'BilletScreen'},
    {title: 'Perfil', icon: 'user', screen: 'ProfileScreen'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={require('../../assets/home.png')}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.txtImage}>Gestor de Condomínio</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {menus.map((item, index) => (
          <TouchableOpacity
            style={styles.btnMenu}
            key={index}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.menuView} />
            <Icon name={item.icon} size={20} color="#8B63E7" />
            <Text style={styles.txtMenu}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.btnMenu}>
          <View style={styles.menuView} />
          <Icon name="toggle-left" size={20} color="#8B63E7" />
          <Text style={styles.txtMenu}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ChooseProperty')}>
          <Text style={styles.txtBtn}>Trocar Propriedade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoArea}>
        <View style={styles.info}>
          <Text style={styles.txtArea}>Olá, Henrique</Text>
          <Text style={styles.txtArea}>Apt 1</Text>
        </View>
        <TouchableOpacity style={styles.settings}>
          <Icon name="gear" size={25} color="#8B63E7" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
