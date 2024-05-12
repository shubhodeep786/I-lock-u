import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { UserHomeScreenProps } from '../types/navigationTypes';

const PinConfirmationScreen: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(''));
  const navigation = useNavigation<UserHomeScreenProps['navigation']>();
  const handleInput = (value: string) => {
    const nextIndex = pin.findIndex((p) => p === '');
    if (nextIndex !== -1) {
      const newPin = [...pin];
      newPin[nextIndex] = value;
      setPin(newPin);
    }
  };


  const handleDelete = () => {
    const lastIndex = pin.findIndex((p) => p === '') - 1;
    if (lastIndex >= 0) {
      const newPin = [...pin];
      newPin[lastIndex] = '';
      setPin(newPin);
    } else if (pin[pin.length - 1] !== '') { 
      const newPin = [...pin];
      newPin[pin.length - 1] = '';
      setPin(newPin);
    }
  };
  const handleNext = () => {
    navigation.navigate('Home'); 
  };


  const renderPinCircles = () => {
    return pin.map((p, index) => (
      <View key={index} style={[styles.circle, p !== '' ? styles.filledCircle : null]} />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Pin Confirmation</Text>
      <Text style={styles.subheader}>Enter 7 digit pin</Text>
      <View style={styles.pinContainer}>{renderPinCircles()}</View>
      <Text style={styles.forgotPin}>Forgot Pin</Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
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
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  filledCircle: {
    backgroundColor: '#333',
  },
  forgotPin: {
    color: 'blue',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  keyStyle: {
    width: '30%',
    padding: 10,
    alignItems: 'center',
    margin: 5,
  },
  keyText: {
    fontSize: 20,
  }
});

export default PinConfirmationScreen;
