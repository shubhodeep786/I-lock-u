import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Modal, Alert } from 'react-native';
import { UploadDocumentsScreenNavigationProp, ReciveDocumentProps, NotificationScreenProps, SelectDocumentsPageNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, HomeScreenNavigationProp } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

interface ProfileHeaderProps {
  userName: string;
  userId: string;
  userImage: { uri: string };
}

const HomeIcon = () => (
  <Image
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/627/580/original/vector-home-icon-symbol-sign.jpg' }}
    style={styles.iconImage}
  />
);

const DocumentIcon = () => (
  <Image
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png' }}
    style={styles.iconImage}
  />
);

const UploadIcon = () => (
  <Image
    source={{ uri: 'https://th.bing.com/th/id/OIP.qM4gofQvkDbbrGeMt1sP-wHaD9?rs=1&pid=ImgDetMain' }}
    style={styles.iconImage}
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: 'https://th.bing.com/th/id/OIP.NMPXaBadVF3pdRmwJyqmZQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
    style={styles.iconImage}
  />
);

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userName, userId, userImage }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={userImage} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userId}>{userId}</Text>
        <Text style={styles.additionalInfo}>“abckdf1234567890abcdfgh?”</Text>
        <Text style={styles.additionalInfo}>“0x58e9393773983ae9f2d4210e595686d2e050886”</Text>
      </View>
    </View>
  );
};

interface MenuButtonProps {
  title: string;
  onPress: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Text style={styles.menuButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen: React.FC = () => {
  const uploadDocumentScreenNavigation = useNavigation<UploadDocumentsScreenNavigationProp['navigation']>();
const DocumentScreenNavigation = useNavigation<DocumentsScreenNavigationProp['navigation']>();
const SharedDocumentScreenNavigation = useNavigation<SharedDocumentsScreenNavigationProp['navigation']>();
const ProfileScreenNavigation = useNavigation<ProfileScreenNavigationProp['navigation']>();
const HomeScreenNavigation = useNavigation<HomeScreenNavigationProp['navigation']>();
const NotificationScreenProps = useNavigation<NotificationScreenProps['navigation']>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    userName: 'Kundan Chouhan',
    userId: '6294530017',
    userImage: { uri: 'https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' },
  });
  
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
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://yourapi.com/user'); // Replace with your API endpoint
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const data = await response.json();
          if (response.ok) {
            setUserData({
              userName: data.userName,
              userId: data.userId,
              userImage: { uri: data.userImage },
            });
          } else {
            throw new Error('Failed to fetch user data');
          }
        } else {
          throw new Error('Received non-JSON response');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
        // Use hardcoded data as a fallback
        setUserData({
          userName: 'Kundan Chouhan',
          userId: '6294530017',
          userImage: { uri: 'https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' },
        });
      }
    };

    fetchUserData();
  }, []);

  const openDownloadModal = () => {
    setModalVisible(true);
  };

  const closeDownloadModal = () => {
    setModalVisible(false);
  };


  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader
          userName={userData.userName}
          userId={userData.userId}
          userImage={userData.userImage}
        />
        <View style={styles.menuContainer}>
          <MenuButton title="Settings" onPress={() => { }} />
          <MenuButton title="My Shared History" onPress={() => { }} />
          <MenuButton title="Download Data" onPress={openDownloadModal} />
          <MenuButton title="My Documents" onPress={() => { }} />
          <MenuButton title="Change Pin" onPress={() => { }} />
        </View>
      </ScrollView>
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={DocumentsButtonClicked}>
          <HomeIcon />
          <Text style={styles.navbarButtonText} onPress={UserHomeButtonClicked}>Home</Text>
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeDownloadModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalIndicator} />
            <TouchableOpacity onPress={closeDownloadModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => { }}>
              <Text style={styles.modalButtonText}>Download ZIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => { }}>
              <Text style={styles.modalButtonText}>Get it to Your Registered Mail Id</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => { }}>
              <Text style={styles.modalButtonText}>Get Download Link</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  headerContainer: {
    height: screenHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#091D64',
  },
  userId: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  additionalInfo: {
    fontSize: 12,
    color: '#666666',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  menuButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuButtonText: {
    fontSize: 16,
    color: '#091D64',
    fontWeight: '600',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navbarButton: {
    alignItems: 'center',
  },
  navbarButtonText: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  iconImage: {
    width: 24,
    height: 24,
    tintColor: '#091D64',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000',
  },
  modalButton: {
    backgroundColor: '#F4F7FC',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#091D64',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
