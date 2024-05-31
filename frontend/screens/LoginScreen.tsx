import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenProps } from '../types/navigationTypes'; 

const screenWidth = Dimensions.get('window').width;

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<LoginScreenProps['navigation']>();

  const handleLogin = async () => {
    navigation.navigate('UnlockScreen');
    // try {
    //   const response = await fetch('https://yourapi.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       phoneNumber: phoneNumber,
    //     }),
    //   });
  
    //   const responseText = await response.text();
    //   console.log('Response text:', responseText);
  
    //   try {
    //     const data = JSON.parse(responseText);
    //     if (response.ok) {
    //       console.log('Log in successful:', data);
    //       navigation.navigate('UnlockScreen');
    //     } else {
    //       Alert.alert('Login failed', data.message);
    //     }
    //   } catch (error) {
    //     console.error('Error parsing response:', error);
    //     Alert.alert('Error', 'Something went wrong. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error logging in:', error);
    //   Alert.alert('Error', 'Something went wrong. Please try again.');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.subtitle}>Enter Mobile Number to Continue</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="+91 00000 00000"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholderTextColor="#000"
      />
      <Text style={styles.agreementText}>
        By Entering OTP, I agree with the <Text style={styles.termsText}>Terms and conditions</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 30,
    color: '#000',
  },
  agreementText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  termsText: {
    color: '#091D64',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#091D64',
    borderRadius: 10,
    width: screenWidth * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Adjust this value as needed to add padding from the bottom
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
