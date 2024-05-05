// UploadDocumentsScreen.tsx
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SearchBar from './Components/SearchBar';
import ActionCard from './Components/ActionCard';

const UploadDocumentsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <Text style={styles.header}>Upload Documents</Text>
      <View style={styles.actionsContainer}>
        <ActionCard
          title="Upload Documents"
          icon={require('../assets/upload_icon.png')} // Replace with actual path
          onPress={() => console.log('Upload Documents')}
        />
        <ActionCard
          title="Scan Document"
          icon={require('../assets/scan_icon.png')} // Replace with actual path
          onPress={() => console.log('Scan Document')}
        />
        <ActionCard
          title="Import"
          icon={require('../assets/import_icon.png')} // Replace with actual path
          onPress={() => console.log('Import')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  }
});

export default UploadDocumentsScreen;
