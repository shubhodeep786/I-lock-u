// UserProfileHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface UserProfileHeaderProps {
  name: string;
  uid: string;
  phone: string;
  email: string;
  dob: string;
  aadhar: string;
  pan: string;
  profileImage: any; // You can refine this type
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  name,
  uid,
  phone,
  email,
  dob,
  aadhar,
  pan,
  profileImage
}) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>UID: {uid}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>DOB: {dob}</Text>
      <Text style={styles.text}>Aadhar: {aadhar}</Text>
      <Text style={styles.text}>Pan: {pan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 3,
  }
});

export default UserProfileHeader;
