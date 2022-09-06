import React from 'react';
import {KeyboardAvoidingView, Text} from 'react-native';
import styles from './styles';
export function RegisterFinished() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.txt}>Tela de registro finalizado</Text>
    </KeyboardAvoidingView>
  );
}
