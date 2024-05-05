import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const SetPinScreen: React.FC = () => {
  const [pin, setPin] = useState<string[]>(['', '', '', '']);

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
    }
  };

  const renderPinCircles = () => {
    return pin.map((p, index) => (
      <View key={index} style={[styles.circle, p !== '' ? styles.filledCircle : null]} />
    ));
  };

  const renderKey = (key: string) => {
    return (
      <TouchableOpacity
        key={key}
        style={styles.keyStyle}
        onPress={() => key === '⌫' ? handleDelete() : handleInput(key)}
      >
        <Text style={styles.keyText}>{key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Set Pin</Text>
      <Text style={styles.subheader}>Set a 4 digit pin</Text>
      <View style={styles.pinContainer}>{renderPinCircles()}</View>
      <TouchableOpacity style={styles.button}>
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
    marginBottom: 20,
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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
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

export default SetPinScreen;
