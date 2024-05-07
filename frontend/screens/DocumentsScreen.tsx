// DocumentsScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar';
import DocumentCategoryCard from './components/DocumentCategoryCard';

const DocumentsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      {/* <View style={styles.grid}>
        <DocumentCategoryCard
          title="Identity Documents"
          icon={require('./icons/identity.png')}
          onPress={() => console.log('Identity Documents')}
        />
        <DocumentCategoryCard
          title="Financial and Asset Documents"
          icon={require('./icons/financial.png')}
          onPress={() => console.log('Financial Documents')}
        />
        <DocumentCategoryCard
          title="Travel Documents"
          icon={require('./icons/travel.png')}
          onPress={() => console.log('Travel Documents')}
        />
        <DocumentCategoryCard
          title="Medical Documents"
          icon={require('./icons/medical.png')}
          onPress={() => console.log('Medical Documents')}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  }
});

export default DocumentsScreen;
