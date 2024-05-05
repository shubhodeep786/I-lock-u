import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from './Components/ProfileHeader';
import MenuButton from './Components/MenuButton';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader 
        userName="Kundan Chouhan" 
        userId="6294530017" 
        userImage={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' }} 
      />
      <MenuButton title="My Personal Details" onPress={() => {}} />
      <MenuButton title="Settings" onPress={() => {}} />
      <MenuButton title="My Shared History" onPress={() => {}} />
      <MenuButton title="Download Data" onPress={() => {}} />
      <MenuButton title="My Documents" onPress={() => {}} />
      <MenuButton title="Change Pin" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  }
});

export default ProfileScreen;
