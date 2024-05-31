import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserHomeScreenProps } from '../types/navigationTypes';

const ConfirmPinScreen: React.FC = () => {
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);
  // const [userPin, setUserPin] = useState<string | null>(null);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation<UserHomeScreenProps['navigation']>();

  // useEffect(() => {
  //   // Fetch user data and set the user pin
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch('https://yourapi.com/user'); // Replace with your API endpoint
  //       const data = await response.json();
  //       if (response.ok) {
  //         setUserPin(data.pin); // Assuming 'data.pin' contains the user's PIN
  //       } else {
  //         Alert.alert('Error', 'Failed to fetch user data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //       Alert.alert('Error', 'Something went wrong. Please try again.');
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  const handleNextPress = () => {
    navigation.navigate('UserHome');
    // const enteredPin = pin.join('');
    // if (enteredPin.length === 6) {
    //   if (enteredPin === userPin) {
    //     navigation.navigate('UserHome');
    //   } else {
    //     Alert.alert('Invalid PIN', 'The entered PIN is incorrect. Please try again.');
    //   }
    // } else {
    //   alert('Please enter a 6-digit PIN.');
    // }
  };

  const handlePinChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newPin.join('').length === 6) {
      handleNextPress();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && pin[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Pin Confirmation</Text>
        <Text style={styles.subheader}>Enter 6 digit pin</Text>
        <View style={styles.pinContainer}>
          {pin.map((p, index) => (
            <TextInput
              key={index}
              ref={(ref) => inputRefs.current[index] = ref}
              style={styles.pinInput}
              keyboardType="number-pad"
              maxLength={1}
              value={p}
              onChangeText={(value) => handlePinChange(index, value)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
              autoFocus={index === 0}
            />
          ))}
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPinText}>Forgot Pin</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#091D64',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pinInput: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
  },
  forgotPinText: {
    fontSize: 14,
    color: '#091D64',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#091D64',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmPinScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

