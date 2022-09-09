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
        <Text style={styles.txt}>Olá, Henrique, selecione uma propriedade</Text>
        <Icon name="home" size={35} color="#8B63E7" style={{marginLeft: 5}} />
      </View>
      <ScrollView style={{marginBottom: 100}}>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('MainDrawer')}>
            <Text style={styles.txtBtn}>Apt 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 2</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 3</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 4</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 5</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 6</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 7</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 8</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 9</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 10</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 11</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 12</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 13</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 14</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 15</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 16</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 16</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 17</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 18</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 19</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 20</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Apt 21</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
