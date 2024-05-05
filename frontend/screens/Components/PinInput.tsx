import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PinInputProps {
  value: string;
  onInput: (value: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({ value, onInput }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.digit}>{value[0] || ' '}</Text>
      <Text style={styles.digit}>{value[1] || ' '}</Text>
      <Text style={styles.digit}>{value[2] || ' '}</Text>
      <Text style={styles.digit}>{value[3] || ' '}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  digit: {
    width: 40,
    height: 40,
    lineHeight: 40,
    fontSize: 24,
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default PinInput;
