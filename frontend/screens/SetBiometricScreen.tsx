// SetBiometricScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CreateProfileScreenNavigationProp } from '../types/navigationTypes'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';

const SetBiometricScreen: React.FC = () => {
  const navigation = useNavigation<CreateProfileScreenNavigationProp['navigation']>();
  const handleNextPress = () => {
    navigation.navigate('CreateProfile');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Biometric</Text>
      <Text style={styles.subtitle}>Touch the Fingerprint Sensor to Set Biometric</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNextPress}>
        <Text style={styles.skipText} >Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  icon: {
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SetBiometricScreen;
