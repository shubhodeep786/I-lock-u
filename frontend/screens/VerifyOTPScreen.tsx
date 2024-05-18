import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SetPinScreenProps } from '../types/navigationTypes'; // Adjust the path as necessary

const VerifyOTPScreen: React.FC = () => {
  const [OTP, setOTP] = useState<Array<string>>(['', '', '', '']);
  const [counter, setCounter] = useState(30);
  const navigation = useNavigation<SetPinScreenProps['navigation']>();
  const handleNextPress = () => {
    navigation.navigate('SetPin');
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Verify Mobile Number</Text>
      <Text style={styles.subheader}>
        we have sent an OTP to your registered mobile number xxxxxx0017
      </Text>
      <View style={styles.inputsContainer}>
        {renderInputs()}
      </View>
      <Text style={styles.timer}>
        Resend in <Text style={styles.timerText}>{counter.toString().padStart(2, '0')} sec</Text>
      </Text>
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000080',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  timer: {
    marginBottom: 20,
    color: '#000',
  },
  timerText: {
    color: 'red',
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
});

export default VerifyOTPScreen;
