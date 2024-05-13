import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import ActionCard from './Components/ActionCard';

const UploadDocumentsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [selectedType, setSelectedType] = useState(null);

  const openModal = (type) => {
    setDocumentType(type);
    setModalVisible(true);
  };

  const documentIcons = [
    { id: 'ID', icon: 'https://example.com/icon-id.svg' },
    { id: 'Finance', icon: 'https://example.com/icon-finance.svg' },
    { id: 'Health', icon: 'https://example.com/icon-health.svg' },
    { id: 'Travel', icon: 'https://example.com/icon-travel.svg' }
  ];

  const DocumentTypeModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Choose Document Type for {documentType}</Text>
          <ScrollView style={styles.iconContainer}>
            {documentIcons.map((item, index) => (
              <TouchableOpacity key={index} style={[styles.icon, selectedType === item.id && styles.active]}
                onPress={() => setSelectedType(item.id)}
              >
                <Image style={styles.iconImage} source={{ uri: item.icon }} />
                <Text>{item.id}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
              console.log('Selected Document Type:', selectedType);
            }}
          >
            <Text style={styles.textStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <ActionCard
        title="Upload Documents"
        icon={{ uri: 'https://example.com/upload-icon.jpg' }}
        onPress={() => openModal('Upload Documents')}
      />
      <ActionCard
        title="Scan Document"
        icon={{ uri: 'https://example.com/upload-icon.jpg' }}
        onPress={() => openModal('Scan Document')}
      />
      <ActionCard
        title="Import"
        icon={{ uri: 'https://example.com/upload-icon.jpg' }}
        onPress={() => openModal('Import')}
      />
      <DocumentTypeModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7', // Lighter background as per the image
    alignItems: 'center', // Center children horizontally
    justifyContent: 'center', // Center children vertically
    paddingTop: 20, // Top padding to avoid overlap with the status bar
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for modal overlay
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%' // Ensuring modal is not too wide
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18, // Increased font size for better readability
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10, // Add margin top for spacing from the last element
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow icons to wrap in modal
    justifyContent: 'space-around',
  },
  icon: {
    alignItems: 'center',
    padding: 10,
    margin: 5, // Add margin for spacing between icons
  },
  active: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
  },
  iconImage: {
    width: 48,
    height: 48,
  },
  actionCard: {
    backgroundColor: '#4B7FFB', // Adjusted to match the blue in the image
    borderRadius: 10,
    width: 280, // Adjust width as per the design in the image
    height: 110, // Adjust height for better aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Space between cards
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
});


export default UploadDocumentsScreen;

// write the updated styles for the following correclty 