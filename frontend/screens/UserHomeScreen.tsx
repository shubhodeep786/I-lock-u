import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { UploadDocumentsScreenNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, RootStackParamList, HomeScreenNavigationProp } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
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
  const uploadDocumentScreenNavigation = useNavigation<UploadDocumentsScreenNavigationProp['navigation']>();
  const DocumentScreenNavigation = useNavigation<DocumentsScreenNavigationProp['navigation']>();
  const SharedDocumentScreenNavigation = useNavigation<SharedDocumentsScreenNavigationProp['navigation']>();
  const ProfileScreenNavigation = useNavigation<ProfileScreenNavigationProp['navigation']>();
  const HomeScreenNavigation = useNavigation<HomeScreenNavigationProp['navigation']>();
  const navigation = useNavigation();

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

  const ShareDocumentButtonClicked = () => {
    SharedDocumentScreenNavigation.navigate('SharedDocuments');
  };
  const handleReceiveDocumentClick = () => {
    setShowQR(true);
  };

  const handleClose = () => {
    setShowQR(false);
  };

  const [showShare, setShowShare] = useState(false);

  const handleShareDocumentsClick = () => {
    setShowShare(true);
  };

  const handleCloseShare = () => {
    setShowShare(false);
  };

  if (showShare) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCloseShare} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Share Your Documents</Text>
        </View>
      </View>
    );
  }
  if (showQR) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.qrContainer}>
          <Image source={{ uri: "https://th.bing.com/th/id/OIP.mK2kr2iSUYk_Fvz9c5LDhQHaHa" }} style={styles.qrImage} />
          <Text style={styles.qrTitle}>Scan the QR Code to Receive File</Text>
          <Image></Image>
        </View>
      </View>
    );
  }


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

      <Text style={styles.recentDocumentsTitle} >Recent Documents</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.recentDocumentCard}>
          <Image source={{ uri: 'https://example.com/aadhar-card.jpg' }} style={styles.documentImage} />
          <Text style={styles.documentTitle}>Aadhar Card</Text>
          <View style={styles.shareInfo}>
            <Text style={styles.shareLabel}>Shared to</Text>
            <View style={styles.shareIcons}>
              <ProfileIcon />
              <ProfileIcon />
              <ProfileIcon />
            </View>
          </View>
          <Text style={styles.lastSharedDate}>Last Shared: 01 Jan 2022</Text>
        </View>

        <View style={styles.recentDocumentCard}>
          <Image source={{ uri: 'https://example.com/pan-card.jpg' }} style={styles.documentImage} />
          <Text style={styles.documentTitle}>Pan Card</Text>
          <View style={styles.shareInfo}>
            <Text style={styles.shareLabel}>Shared to</Text>
            <View style={styles.shareIcons}>
              <ProfileIcon />
              <ProfileIcon />
              <ProfileIcon />
              <ProfileIcon />
              <ProfileIcon />
            </View>
          </View>
          <Text style={styles.lastSharedDate}>Last Shared: 01 Jan 2022</Text>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.bottomNavbar} >
        <TouchableOpacity style={styles.navbarButton} onPress={UserHomeButtonClicked} >
          <HomeIcon />
          <Text style={styles.navbarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={DocumentsButtonClicked}>
          <DocumentIcon />
          <Text style={styles.navbarButtonText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} >
          <UploadIcon />
          <Text style={styles.navbarButtonText} onPress={UploadDocumentButtonClicked}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton}>
          <ProfileIcon />
          <Text style={styles.navbarButtonText} onPress={ProfileButtonClicked}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'black',
  },
  qrContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  qrImage: {
    width: 200,
    height: 200,
  },
  qrTitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
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
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  shareDocumentButton: {
    backgroundColor: '#007AFF',
  },
  receiveDocumentButton: {
    backgroundColor: '#5AC8FA',
  },
  actionButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  recentDocumentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  recentDocumentCard: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  documentImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  documentTitle: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  shareInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  shareLabel: {
    marginRight: 8,
    color: '#666',
  },
  shareIcons: {
    flexDirection: 'row',
  },
  lastSharedDate: {
    marginTop: 8,
    color: '#666',
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
    color: '#333',
    marginTop: 4,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserHomeScreen;
