import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Switch,
  ListRenderItem,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';

interface Document {
  id: string;
  name: string;
  type: string;
  image: string;
  uploadedDate: string;
}

const SelectDocumentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [documentsData, setDocumentsData] = useState<Document[]>([]);
  const [selectedDocuments, setSelectedDocuments] = useState<{ [key: string]: boolean }>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [expiryDate, setExpiryDate] = useState<string>('Select');

  useEffect(() => {
    // Fetch documents data from API
    const fetchDocumentsData = async () => {
      try {
        const response = await fetch('https://yourapi.com/documents'); // Replace with your API endpoint
        const data = await response.json();
        if (response.ok) {
          setDocumentsData(data);
        } else {
          Alert.alert('Error', 'Failed to fetch documents data');
        }
      } catch (error) {
        console.error('Error fetching documents data:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    };

    fetchDocumentsData();
  }, []);

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    if (newSelectAll) {
      const allSelected: { [key: string]: boolean } = {};
      documentsData.forEach((doc) => (allSelected[doc.id] = true));
      setSelectedDocuments(allSelected);
    } else {
      setSelectedDocuments({});
    }
  };

  const toggleDocumentSelection = (doc: Document) => {
    setSelectedDocuments((prevSelected) => ({
      ...prevSelected,
      [doc.id]: !prevSelected[doc.id],
    }));
    if (!selectedDocuments[doc.id]) {
      setSelectedDocument(doc);
      setModalVisible(true);
    }
  };

  const handleSetButtonPress = async () => {
    if (selectedDocument) {
      try {
        const response = await fetch('https://yourapi.com/setExpiry', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            documentId: selectedDocument.id,
            expiryDate: expiryDate,
          }),
        });

        if (response.ok) {
          setModalVisible(false);
          Alert.alert('Success', 'Expiry date set successfully');
        } else {
          Alert.alert('Error', 'Failed to set expiry date');
        }
      } catch (error) {
        console.error('Error setting expiry date:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }
  };

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem: ListRenderItem<Document> = ({ item }) => {
    const isSelected = selectedDocuments[item.id] || false;

    return (
      <TouchableOpacity
        style={[styles.documentCard, isSelected && styles.selectedCard]}
        onPress={() => toggleDocumentSelection(item)}
      >
        <Image source={{ uri: item.image }} style={styles.documentImage} />
        <View style={styles.documentDetails}>
          <Text style={styles.documentName}>{item.name}</Text>
          <Text style={styles.documentType}>{item.type}</Text>
          <Text style={styles.uploadedDate}>Uploaded {item.uploadedDate}</Text>
        </View>
        <Switch
          value={isSelected}
          onValueChange={() => toggleDocumentSelection(item)}
          style={styles.switch}
        />
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
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={toggleSelectAll}>
          <Text style={styles.selectAllText}>{selectAll ? 'Deselect All' : 'Select All'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.selectDocumentsTitle}>Select Documents</Text>
      <FlatList
        data={filteredDocuments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.documentList}
      />
      {modalVisible && selectedDocument && (
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Set Expiry Date</Text>
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownText}>{expiryDate}</Text>
                <View style={styles.dropdownMenu}>
                  <Text style={styles.documentName}>{item.name}</Text>
                  <Text style={styles.documentType}>{item.type}</Text>
                  <Text style={styles.uploadedDate}>Uploaded {item.uploadedDate}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.setButton} onPress={handleSetButtonPress}>
                <Text style={styles.setButtonText}>Set</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#F3F4F6',
  },
  selectAllText: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectDocumentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#111827',
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
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedCard: {
    borderColor: '#3B82F6',
    borderWidth: 2,
  },
  documentImage: {
    width: 80,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  documentDetails: {
    flex: 1,
  },
  documentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  documentType: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  uploadedDate: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  switch: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
  dropdownContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginBottom: 20,
    position: 'relative',
  },
  dropdownText: {
    padding: 10,
    color: '#111827',
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#111827',
  },
  setButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  setButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SelectDocumentsPage;
