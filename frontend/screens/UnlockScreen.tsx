import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { PinConfirmationScreenProps } from '../types/navigationTypes';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const UnlockScreen: React.FC = () => {
  const navigation = useNavigation<PinConfirmationScreenProps['navigation']>();

  const handleFingerprintUnlock = () => {
    console.log('Fingerprint unlock attempted');
  };

  const handleUsePin = () => {
    console.log('Switch to PIN unlock');
    navigation.navigate('PinConfirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>UIL</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.unlockText}>Unlock UIL</Text>
        <Text style={styles.descriptionText}>Confirm Your Screen Lock PIN, Pattern or Password</Text>
        <TouchableOpacity onPress={handleFingerprintUnlock} style={styles.fingerprintButton}>
          <Image
            style={styles.fingerprintImage}
            source={{ uri: 'https://th.bing.com/th/id/OIP.kBQnGbWmtwL3roivqa2PJwHaHa?rs=1&pid=ImgDetMain' }}
          />
          <Text style={styles.fingerprintText}>Touch the Fingerprint Sensor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUsePin} style={styles.usePinButton}>
          <Text style={styles.usePinText}>USE PIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#CCCCCC',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#091D64',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  unlockText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#091D64',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 30,
  },
  fingerprintButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fingerprintImage: {
    width: 100,
    height: 100,
  },
  fingerprintText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 10,
  },
  usePinButton: {
    padding: 10,
  },
  usePinText: {
    fontSize: 16,
    color: '#091D64',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default UnlockScreen;
