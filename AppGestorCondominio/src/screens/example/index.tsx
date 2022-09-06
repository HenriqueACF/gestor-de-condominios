import React from 'react';
import {KeyboardAvoidingView, Text} from 'react-native';
import styles from './styles';
export function example({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.txt}>Tela de exemplo</Text>
        </KeyboardAvoidingView>
    );
}
