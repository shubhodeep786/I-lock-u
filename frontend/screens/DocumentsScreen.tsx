import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import SearchBar from './Components/SearchBar';
import { UploadDocumentsScreenNavigationProp, ReciveDocumentProps, NotificationScreenProps, SelectDocumentsPageNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, HomeScreenNavigationProp } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

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

const documentData = [
  { title: 'Identity Documents', imageUrl: 'https://example.com/identity.png' },
  { title: 'Financial and Asset Documents', imageUrl: 'https://example.com/financial.png' },
  { title: 'Travel Documents', imageUrl: 'https://example.com/travel.png' },
  { title: 'Medical Documents', imageUrl: 'https://example.com/medical.png' },
];

const DocumentsScreen: React.FC = () => {
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


  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar />
        <Text style={styles.headerText}>My Documents</Text>
        <View style={styles.grid}>
          {documentData.map((doc, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              {doc.imageUrl && <Image source={{ uri: doc.imageUrl }} style={styles.documentIcon} />}
              <Text style={styles.text}>{doc.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navbarButton}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#091D64',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  documentIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#091D64',
    textAlign: 'center',
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
});

export default DocumentsScreen;
