import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { SetPinScreenProps } from '../types/navigationTypes'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';
const VerifyOTPScreen: React.FC = () => {
  const [OTP, setOTP] = useState<Array<string>>(['', '', '', '']);
  const [counter, setCounter] = useState(30);
  const navigation = useNavigation<SetPinScreenProps['navigation']>();
  const handleNextPress = () => {
    navigation.navigate('SetPin');
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter(counter - 1);
    }, 1000) : null;
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter]);

  const handleInput = (text: string, index: number) => {
    const newOTP = [...OTP];
    newOTP[index] = text;
    setOTP(newOTP);
  };

  const renderInputs = () => {
    return OTP.map((value, index) => (
      <TextInput
        key={index}
        style={styles.inputBox}
        value={value}
        onChangeText={(text) => handleInput(text, index)}
        maxLength={1}
        keyboardType="number-pad"
      />
    ));
  };

  const handleKeyPress = (key: string) => {
    if (key === 'clear') {
      setOTP(['', '', '', '']);
    } else {
      const firstEmptyIndex = OTP.findIndex(value => value === '');
      if (firstEmptyIndex !== -1) {
        handleInput(key, firstEmptyIndex);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Verify Mobile Number</Text>
      <Text style={styles.subheader}>we have sent an OTP to your registered mobile number</Text>
      <View style={styles.inputsContainer}>
        {renderInputs()}
      </View>
      <Text style={styles.timer}>Resend in {counter.toString().padStart(2, '0')} sec</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}  onPress={handleNextPress}>Next</Text>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
  },
  timer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
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

export default VerifyOTPScreen;
