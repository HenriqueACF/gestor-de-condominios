import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import styles from './style';

export function ChooseProperty({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.txt}>Selecione uma Propriedade</Text>
      <ScrollView>
        <View>
          <Text>Propriedade 1</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
