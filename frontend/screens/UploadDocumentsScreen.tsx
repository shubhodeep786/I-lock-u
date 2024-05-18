import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, ScrollView, Dimensions, GestureResponderEvent } from 'react-native';
import SearchBar from './Components/SearchBar';

const screenWidth = Dimensions.get('window').width;

interface ActionCardProps {
  title: string;
  icon: { uri: string };
  onPress: () => void;
  large?: boolean;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, icon, onPress, large = false }) => (
  <TouchableOpacity style={[styles.actionCard, large && styles.largeCard]} onPress={onPress}>
    <Image source={icon} style={styles.actionIcon} />
    <Text style={styles.actionText}>{title}</Text>
  </TouchableOpacity>
);

const HomeIcon = () => (
  <Image
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/627/580/original/vector-home-icon-symbol-sign.jpg' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const DocumentIcon = () => (
  <Image
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const UploadIcon = () => (
  <Image
    source={{ uri: 'https://th.bing.com/th/id/OIP.qM4gofQvkDbbrGeMt1sP-wHaD9?rs=1&pid=ImgDetMain' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: 'https://th.bing.com/th/id/OIP.NMPXaBadVF3pdRmwJyqmZQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const UploadDocumentsScreen: React.FC = () => {
  const [documentTypeModalVisible, setDocumentTypeModalVisible] = useState(false);
  const [importOptionsModalVisible, setImportOptionsModalVisible] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const openDocumentTypeModal = (type: string) => {
    setDocumentType(type);
    setDocumentTypeModalVisible(true);
  };

  const openImportOptionsModal = () => {
    setDocumentTypeModalVisible(false);
    setImportOptionsModalVisible(true);
  };

  const documentIcons = [
    { id: 'ID', icon: 'https://example.com/icon-id.svg' },
    { id: 'Finance', icon: 'https://example.com/icon-finance.svg' },
    { id: 'Health', icon: 'https://example.com/icon-health.svg' },
    { id: 'Travel', icon: 'https://example.com/icon-travel.svg' }
  ];

  const importOptions = [
    'Digi Locker',
    'Google Drive',
    'One Drive',
    'Import From PNR'
  ];

  const DocumentTypeModal: React.FC = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={documentTypeModalVisible}
      onRequestClose={() => {
        setDocumentTypeModalVisible(!documentTypeModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalIndicator} />
          <Text style={styles.modalText}>Choose Document Type for {documentType}</Text>
          <ScrollView contentContainerStyle={styles.iconContainer}>
            {documentIcons.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.icon, selectedType === item.id && styles.active]}
                onPress={() => setSelectedType(item.id)}
              >
                <Image style={styles.iconImage} source={{ uri: item.icon }} />
                <Text>{item.id}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={openImportOptionsModal}
          >
            <Text style={styles.textStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const ImportOptionsModal: React.FC = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={importOptionsModalVisible}
      onRequestClose={() => {
        setImportOptionsModalVisible(!importOptionsModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalIndicator} />
          <Text style={styles.modalText}>Import From</Text>
          {importOptions.map((option) => (
            <TouchableOpacity key={option} style={styles.importButton}>
              <Text style={styles.importButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  const ProfileButtonClicked = (event: GestureResponderEvent) => {
    console.log("Profile button clicked");
  };

  const UploadDocumentButtonClicked = (event: GestureResponderEvent) => {
    console.log("Upload button clicked");
  };

  const DocumentsButtonClicked = (event: GestureResponderEvent) => {
    console.log("Documents button clicked");
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.header}>Recent Uploaded Documents</Text>
      <View style={styles.grid}>
        <ActionCard
          title="Upload Documents"
          icon={{ uri: 'https://example.com/upload-icon.jpg' }}
          onPress={() => openDocumentTypeModal('Upload Documents')}
        />
        <ActionCard
          title="Scan Document"
          icon={{ uri: 'https://example.com/scan-icon.jpg' }}
          onPress={() => openDocumentTypeModal('Scan Document')}
        />
        <ActionCard
          title="Import"
          icon={{ uri: 'https://example.com/import-icon.jpg' }}
          onPress={() => openDocumentTypeModal('Import')}
          large={true}
        />
      </View>
      {/* Bottom Navbar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navbarButton}>
          <HomeIcon />
          <Text style={styles.navbarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={DocumentsButtonClicked}>
          <DocumentIcon />
          <Text style={styles.navbarButtonText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={UploadDocumentButtonClicked}>
          <UploadIcon />
          <Text style={styles.navbarButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={ProfileButtonClicked}>
          <ProfileIcon />
          <Text style={styles.navbarButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <DocumentTypeModal />
      <ImportOptionsModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    paddingTop: 20,
    paddingBottom: 60, // Space for bottom navbar
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // Align modal to the bottom
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#091D64',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  icon: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  active: {
    borderColor: '#091D64',
    borderWidth: 2,
    borderRadius: 10,
  },
  iconImage: {
    width: 48,
    height: 48,
  },
  actionCard: {
    backgroundColor: '#091D64',
    borderRadius: 20,
    width: '45%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  largeCard: {
    width: '100%',
    height: 120,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: '5%',
  },
  bottomNavbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    width: '100%',
  },
  navbarButton: {
    alignItems: 'center',
  },
  navbarButtonText: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  importButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    alignItems: 'center',
  },
  importButtonText: {
    fontSize: 16,
    color: '#091D64',
    fontWeight: '600',
  },
});

export default UploadDocumentsScreen;
