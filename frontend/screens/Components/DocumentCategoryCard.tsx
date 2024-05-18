// DocumentCategoryCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface DocumentCategoryCardProps {
  title: string;
  icon: any; 
  onPress: () => void;
}

const DocumentCategoryCard: React.FC<DocumentCategoryCardProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 10,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default DocumentCategoryCard;
