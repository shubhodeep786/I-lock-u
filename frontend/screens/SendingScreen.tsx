import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';

const documentsData = [
  {
    id: '1',
    name: 'Kundan Chouhan',
    type: 'Aadhar Card',
    image: 'https://example.com/aadhar.png',
    uploadedDate: 'Jan 1, 2020',
  },
  {
    id: '2',
    name: 'Kundan Chouhan',
    type: 'PAN Card',
    image: 'https://example.com/pan.png',
    uploadedDate: 'Jan 1, 2020',
  },
  {
    id: '3',
    name: 'Kundan Chouhan',
    type: 'Driving Licence',
    image: 'https://example.com/license.png',
    uploadedDate: 'Jan 1, 2020',
  },
];

const SendingScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    if (newSelectAll) {
      const allSelected = {};
      documentsData.forEach((doc) => (allSelected[doc.id] = true));
      setSelectedDocuments(allSelected);
    } else {
      setSelectedDocuments({});
    }
  };

  const toggleDocumentSelection = (id) => {
    setSelectedDocuments((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isSelected = selectedDocuments[item.id] || false;

    return (
      <TouchableOpacity
        style={styles.documentCard}
        onPress={() => toggleDocumentSelection(item.id)}
      >
        <Image source={{ uri: item.image }} style={styles.documentImage} />
        <View style={styles.documentDetails}>
          <Text style={styles.documentName}>{item.name}</Text>
          <Text style={styles.documentType}>{item.type}</Text>
          <Text style={styles.uploadedDate}>Uploaded {item.uploadedDate}</Text>
        </View>
        <Switch value={isSelected} onValueChange={() => toggleDocumentSelection(item.id)} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for documents"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={toggleSelectAll} style={styles.selectAllButton}>
          <Text style={styles.selectAllText}>Select all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredDocuments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.documentList}
      />
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>10%</Text>
        <Text style={styles.sendingText}>Sending File</Text>
        <Text style={styles.recipientText}>To Sachin Burnwal</Text>
        <Text style={styles.fileSizeText}>10 MB File</Text>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  selectAllButton: {
    backgroundColor: '#0D6EFD',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  selectAllText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  documentList: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  documentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  documentImage: {
    width: 60,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  documentDetails: {
    flex: 1,
  },
  documentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentType: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  uploadedDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  progressContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  progressText: {
    fontSize: 24,
    color: '#0D6EFD',
    fontWeight: 'bold',
  },
  sendingText: {
    fontSize: 18,
    color: '#0D6EFD',
    marginVertical: 10,
  },
  recipientText: {
    fontSize: 16,
    color: '#555',
  },
  fileSizeText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: '#0D6EFD',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SendingScreen;
