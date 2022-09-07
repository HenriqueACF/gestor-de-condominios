import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ChooseProperty({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 20,
          paddingBottom: 40,
        }}>
        <Text style={styles.txt}>Selecione uma Propriedade</Text>
        <Icon name="home" size={35} color="#bf40bf" style={{marginLeft: 5}} />
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Propriedade 1</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
