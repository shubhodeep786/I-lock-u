// IdentityDocumentsScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar';
import DocumentIdentityCard from './Components/DocumentIdentityCard';

const IdentityDocumentsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <DocumentIdentityCard
        title="Aadhar Card"
        imageUrl={require('../assets/aadhar_card.png')} // Adjust the path as necessary
        issuedBy="Government of India"
        date="Uploaded Jan 1, 2020"
      />
      <DocumentIdentityCard
        title="PAN Card"
        imageUrl={require('../assets/pan_card.png')} // Adjust the path as necessary
        issuedBy="Income Tax Department"
        date="Uploaded Mar 15, 2022"
      />
      <DocumentIdentityCard
        title="Voter ID"
        imageUrl={require('../assets/voter_id.png')} // Adjust the path as necessary
        issuedBy="Election Commission of India"
        date="Uploaded Aug 20, 2019"
      />
      {/* Add more DocumentCard components as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default IdentityDocumentsScreen;