import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SetPinScreen: React.FC = () => {
  const [pin, setPin] = useState<string>('');
  const navigation = useNavigation();
  const pinInputRef = useRef<TextInput>(null);

  const handleNextPress = () => {
    if (pin.length === 4) {
      navigation.navigate('SetBiometric');
    } else {
      alert('Please enter all 4 digits of your PIN.');
    }
  };

  const renderPinCircles = () => {
    let circles = [];
    for (let i = 0; i < 4; i++) {
      circles.push(
        <View key={i} style={[styles.circle, pin.length > i ? styles.filledCircle : null]} />
      );
    }
    return circles;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Set Pin</Text>
      <Text style={styles.subheader}>Set a 4 digit pin</Text>
      <View style={styles.pinContainer}>
        {renderPinCircles()}
        <TextInput
          ref={pinInputRef}
          value={pin}
          onChangeText={setPin}
          maxLength={4}
          keyboardType="numeric"
          style={styles.hiddenInput}
          returnKeyType="done"
          autoFocus={true}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
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
    color: '#000',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    position: 'relative',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000080',
    marginHorizontal: 5,
  },
  filledCircle: {
    backgroundColor: '#000080',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#000080',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
});

export default SetPinScreen;
