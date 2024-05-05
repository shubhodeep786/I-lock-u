import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { PinConfirmationScreenProps } from '../types/navigationTypes'; 
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const UnlockScreen: React.FC = () => {
  const navigation = useNavigation<PinConfirmationScreenProps['navigation']>();
  // Placeholder function for handling fingerprint unlock
  const handleFingerprintUnlock = () => {
    console.log('Fingerprint unlock attempted');
    // Integrate actual fingerprint unlock logic here
  };

  // Placeholder function for switching to PIN unlock
  const handleUsePin = () => {
    console.log('Switch to PIN unlock');
    navigation.navigate('PinConfirmation');
    // Navigate to PIN unlock screen or show PIN input
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
//when the user clicks on the 'USE PIN' button, they should be routed to the <Stack.Screen name="PinConfirmation" component={PinConfirmationScreen} />


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 20,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  unlockText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
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
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  usePinButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  usePinText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  }
});

export default UnlockScreen;
