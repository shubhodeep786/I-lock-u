import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation(); 

  const handleNextPress = () => {
    navigation.navigate('OTPVerification'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
      <Text style={styles.subheader}>Enter Mobile Number to Continue</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="+91 6294530017"
        placeholderTextColor="#aaa"
      />
      <View style={styles.footer}>
        <Text style={styles.smallText}>By Entering OTP, I agree with the Terms and condition</Text>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomColor: '#007bff',
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
  },
  smallText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    position: 'absolute', // Place the footer at the bottom
    bottom: 0, // Aligns the footer to the bottom
    left: 0,
    right: 0,
    backgroundColor: '#fff', // Ensure background color matches the container for cohesion
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Optional: Adds a visual separation
  },
  button: {
    backgroundColor: '#000077',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  }
});

export default SignUpScreen;
