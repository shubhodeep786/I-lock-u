import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UploadDocumentsScreenNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, HomeScreenNavigationProp } from '../types/navigationTypes';

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

const UserHomeScreen = () => {
  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const uploadDocumentScreenNavigation = useNavigation<UploadDocumentsScreenNavigationProp['navigation']>();
  const DocumentScreenNavigation = useNavigation<DocumentsScreenNavigationProp['navigation']>();
  const SharedDocumentScreenNavigation = useNavigation<SharedDocumentsScreenNavigationProp['navigation']>();
  const ProfileScreenNavigation = useNavigation<ProfileScreenNavigationProp['navigation']>();
  const HomeScreenNavigation = useNavigation<HomeScreenNavigationProp['navigation']>();

  const UserHomeButtonClicked = () => {
    HomeScreenNavigation.navigate('UserHome');
  };
  const DocumentsButtonClicked = () => {
    DocumentScreenNavigation.navigate('Documents');
  };
  const UploadDocumentButtonClicked = () => {
    uploadDocumentScreenNavigation.navigate('UploadDocuments');
  };
  const ProfileButtonClicked = () => {
    ProfileScreenNavigation.navigate('Profile');
  };

  const handleReceiveDocumentClick = () => {
    setShowQR(true);
  };

  const handleClose = () => {
    setShowQR(false);
  };

  const handleShareDocumentsClick = () => {
    setShowShare(true);
  };

  const handleCloseShare = () => {
    setShowShare(false);
  };

  const handleNextPress = () => {
    setShowShare(false);
    console.log("Next button clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for documents"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.userProfileContainer}>
        <Image
          source={{ uri: 'https://example.com/profile-picture.jpg' }}
          style={styles.profilePicture}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Kundan Chouhan</Text>
          <Text style={styles.userDetails}>UID: 0fd4a6d123456789abcdefgh</Text>
          <Text style={styles.userDetails}>Phone Number: 6294530017</Text>
          <Text style={styles.userDetails}>Email: Chouhankundan67@gmail.com</Text>
          <Text style={styles.userDetails}>DOB: 26 Oct 2000</Text>
          <Text style={styles.userDetails}>Aadhar: 9738 0172 0282</Text>
          <Text style={styles.userDetails}>PAN: GH55H562</Text>
        </View>
      </View>

      <View style={styles.documentActionsContainer}>
        <TouchableOpacity
          style={styles.documentActionButton}
          onPress={handleShareDocumentsClick}
        >
          <Text style={styles.documentActionButtonText}>Share Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.documentActionButton}
          onPress={handleReceiveDocumentClick}
        >
          <Text style={styles.documentActionButtonText}>Receive Document</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentDocumentsHeader}>
        <Text style={styles.recentDocumentsHeaderText}>Recent Documents</Text>
        <TouchableOpacity onPress={() => console.log("History clicked")}>
          <Text style={styles.historyLink}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.recentDocumentsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.recentDocumentCard}>
          <Image source={{ uri: 'https://example.com/aadhar-card.jpg' }} style={styles.documentImage} />
          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>Aadhar Card</Text>
            <Text style={styles.uploadDate}>Upload on 1 Jan 2020</Text>
            <View style={styles.shareInfo}>
              <Text style={styles.shareLabel}>Shared to</Text>
              <Image source={{ uri: 'https://example.com/share-icon.png' }} style={styles.shareIcon} />
            </View>
          </View>
          <Text style={styles.lastSharedDate}>Last Shared on 1 Jan 2020</Text>
        </View>

        <View style={styles.recentDocumentCard}>
          <Image source={{ uri: 'https://example.com/pan-card.jpg' }} style={styles.documentImage} />
          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>Pan Card</Text>
            <Text style={styles.uploadDate}>Upload on 1 Jan 2020</Text>
            <View style={styles.shareInfo}>
              <Text style={styles.shareLabel}>Shared to</Text>
              <Image source={{ uri: 'https://example.com/share-icon.png' }} style={styles.shareIcon} />
            </View>
          </View>
          <Text style={styles.lastSharedDate}>Last Shared on 1 Jan 2020</Text>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={UserHomeButtonClicked}>
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

      {/* QR Modal */}
      <Modal visible={showQR} animationType="slide" transparent={true} onRequestClose={handleClose}>
        <View style={styles.qrModalContainer}>
          <View style={styles.qrContainer}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.qrTitle}>Scan the QR Code</Text>
            <View style={styles.qrBox}></View>
          </View>
        </View>
      </Modal>

      {/* Share Modal */}
      <Modal visible={showShare} animationType="slide" transparent={true} onRequestClose={handleCloseShare}>
        <View style={styles.shareModalContainer}>
          <View style={styles.shareModal}>
            <View style={styles.modalIndicator} />
            <Text style={styles.modalTitle}>Share Documents Using</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter EKID or Mobile Number"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfoContainer: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    color: '#666666',
  },
  documentActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#4B0082',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 10,
    marginTop: 10,
  },
  documentActionButton: {
    backgroundColor: '#0000CD',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 80,
  },
  documentActionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  recentDocumentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  recentDocumentsHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyLink: {
    color: '#091D64',
    textDecorationLine: 'underline',
  },
  recentDocumentsContainer: {
    paddingHorizontal: 16,
  },
  recentDocumentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  documentImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  documentInfo: {
    marginLeft: 16,
    flex: 1,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadDate: {
    color: '#666666',
  },
  shareInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  shareLabel: {
    marginRight: 8,
    color: '#666666',
  },
  shareIcon: {
    width: 24,
    height: 24,
    tintColor: '#666666',
  },
  lastSharedDate: {
    color: '#666666',
    marginTop: 8,
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
  },
  navbarButton: {
    alignItems: 'center',
  },
  navbarButtonText: {
    fontSize: 12,
    color: '#333333',
    marginTop: 4,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000000',
  },
  qrModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: Dimensions.get('window').height / 2 * 1.3, // Increase the height by 30%
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
  qrTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrBox: {
    width: 200,
    height: 200,
    borderColor: '#0000CD',
    borderWidth: 2,
    borderRadius: 10,
  },
  shareModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  shareModal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
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
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 30,
    color: '#000',
  },
  button: {
    backgroundColor: '#091D64',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserHomeScreen;
