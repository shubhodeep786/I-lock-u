// SetBiometricScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CreateProfileScreenNavigationProp } from '../types/navigationTypes'; // Adjust the path as necessary

const SetBiometricScreen: React.FC = () => {
  const navigation = useNavigation<CreateProfileScreenNavigationProp['navigation']>();

  const handleNextPress = () => {
    navigation.navigate('CreateProfile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Biometric</Text>
      <Text style={styles.subtitle}>Touch the Fingerprint Sensor to Set Biometric</Text>
      <View style={styles.iconContainer}>
        <Image source={{ uri: 'https://example.com/fingerprint-icon.png' }} style={styles.icon} />
        <Text style={styles.iconSubtitle}>Touch the Fingerprint Sensor</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPress}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  iconSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000080',
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#000080',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SetBiometricScreen;
