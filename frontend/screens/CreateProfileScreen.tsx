import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert } from 'react-native';
import { UserHomeScreenProps } from '../types/navigationTypes'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';

const CreateProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const navigation = useNavigation<UserHomeScreenProps['navigation']>();

  const handleNextPress = async () => {
    navigation.navigate('UserHome');
    // const userProfile = {
    //   name,
    //   email,
    //   dateOfBirth,
    //   aadharNumber,
    //   panNumber,
    // };

    // try {
    //   const response = await fetch('https://yourapi.com/create-profile', { // Replace with your API endpoint
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userProfile),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     // Assuming the API returns a success status and message
    //     if (data.success) {
    //       navigation.navigate('UserHome');
    //     } else {
    //       Alert.alert('Error', data.message || 'Failed to create profile. Please try again.');
    //     }
    //   } else {
    //     const errorData = await response.json();
    //     Alert.alert('Error', errorData.message || 'Failed to create profile. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error creating profile:', error);
    //   Alert.alert('Error', 'An error occurred. Please try again.');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create Profile</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Id"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="Aadhar Number"
          value={aadharNumber}
          onChangeText={setAadharNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Pan Number"
          value={panNumber}
          onChangeText={setPanNumber}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#000080',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateProfileScreen;
