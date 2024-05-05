// DocumentCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface DocumentIdentityCardProps {
  title: string;
  issuedBy: string;
  imageUrl: any;
  issueDate: string;
}

const DocumentIdentityCard: React.FC<DocumentIdentityCardProps> = ({ title, issuedBy, imageUrl, issueDate }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.issuedBy}>{issuedBy}</Text>
        <Text style={styles.issueDate}>{issueDate}</Text>
      </View>
      <TouchableOpacity style={styles.options}>
        <Text>⋮</Text> {/* Options icon, replace with an icon if necessary */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  issuedBy: {
    fontSize: 14,
  },
  issueDate: {
    fontSize: 12,
  },
  options: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});

export default DocumentIdentityCard;
