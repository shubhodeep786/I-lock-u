import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';

const FullScreenScanner = () => {
  const [scanned, setScanned] = useState(false);
  const [qrCode, setQRCode] = useState('');
  const [isModalVisible, setModalVisible] = useState(true);
  const [ekid, setEKID] = useState('');

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setQRCode(data);
    alert(`QR Code scanned: ${data}`);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleNext = () => {
    // Add functionality to handle the 'Next' button
    console.log(`EKID or Mobile Number entered: ${ekid}`);
    toggleModal();
  };

  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Scan the QR Code</Text>
        <View style={styles.qrScannerContainer}>
          <RNCamera
            style={StyleSheet.absoluteFillObject}
            onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
            captureAudio={false}
          />
        </View>
        <View style={styles.bottomSheet}>
          <Text style={styles.label}>Share Documents Using</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter EKID or Mobile Number"
            value={ekid}
            onChangeText={setEKID}
          />
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  qrScannerContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#0D6EFD',
    marginHorizontal: 20,
    marginTop: 10,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: '#0D6EFD',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FullScreenScanner;
