import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { UserHomeScreenProps } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
const ConfirmPinScreen: React.FC = () => {
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const navigation = useNavigation<UserHomeScreenProps['navigation']>();
  const handleNextPress = () => {
    navigation.navigate('UserHome');
  };

  const renderPinCircles = () => {
    return pin.map((p, index) => (
      <View key={index} style={[styles.circle, p !== '' ? styles.filledCircle : null]} />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Confirm Pin</Text>
      <Text style={styles.subheader}>Enter the pin you set</Text>
      <View style={styles.pinContainer}>{renderPinCircles()}</View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleNextPress}>Next</Text>
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

export default ConfirmPinScreen;
