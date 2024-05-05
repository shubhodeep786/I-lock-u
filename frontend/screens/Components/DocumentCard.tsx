// DocumentCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface DocumentCardProps {
  title: string;
  uploadDate: string;
  shareDate: string;
  imageUrl: any; // You can refine this type
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, uploadDate, shareDate, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Uploaded on {uploadDate}</Text>
        <Text style={styles.date}>Last Shared on {shareDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  }
});

export default DocumentCard;
