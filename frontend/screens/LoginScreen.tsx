// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenProps } from '../types/navigationTypes'; // Adjust the path as necessary

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const handleLogin = () => {
    console.log('Log in with phone number:', phoneNumber);
    navigation.navigate('UnlockScreen');
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <Text style={styles.subheader}>Enter Mobile Number to Continue</Text>
      <TextInput
        style={styles.input}
        placeholder="+91 00000 00000"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      <Text style={styles.termsText}>By Entering OTP, I agree with the Terms and condition</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default LoginScreen;
