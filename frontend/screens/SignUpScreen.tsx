import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { OTPVerificationScreenProps } from '../types/navigationTypes'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';
const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<OTPVerificationScreenProps>();
  const handleNextPress = () => {
    navigation.navigate('OTPVerification'); // Correct navigation command
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
      <Text style={styles.subheader}>Enter Mobile Number to Continue</Text>
      <TextInput 
        style={styles.input} 
        keyboardType="phone-pad" 
        placeholder="+91 00000 00000"
        placeholderTextColor="#aaa"
      />
      <Text style={styles.smallText}>By Entering OTP, I agree with the Terms and condition</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// when clicked on the Next button it should route to the         <Stack.Screen name="OTPVerification" component={VerifyOTPScreen} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    fontSize: 18,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  smallText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  }
});

export default SignUpScreen;
