import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PinInput from './Components/PinInput';
import NumericKeypad from './Components/NumericKeypad';

const PinConfirmationScreen: React.FC = () => {
  const [pin, setPin] = useState('');

  const handleKeyPress = (key: string) => {
    if (key === '⌫') {
      setPin((prev) => prev.slice(0, -1));
    } else if (pin.length < 4) {
      setPin((prev) => prev + key);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Pin Confirmation</Text>
      <Text style={styles.subtitle}>Enter a 4 digit pin for Your Document Name Aadhar card</Text>
      <PinInput value={pin} onInput={setPin} />
      <NumericKeypad onKeyPress={handleKeyPress} />
      <Button title="Next" onPress={() => console.log('Pin:', pin)} disabled={pin.length !== 4} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PinConfirmationScreen;
