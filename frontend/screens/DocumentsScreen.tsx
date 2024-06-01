import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import SearchBar from './Components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { UploadDocumentsScreenNavigationProp, ReciveDocumentProps, NotificationScreenProps, SelectDocumentsPageNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, HomeScreenNavigationProp } from '../types/navigationTypes';

const HomeIcon = () => (
  <Image
    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/web-develover-1/32/home-512.png' }}
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
    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/cloud-outline-upload-1024.png' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/social-media-2506/32/Profile_Basic_UI_Social_Media-512.png' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const documentData = [
  { title: 'Identity Documents', imageUrl: 'https://example.com/identity.png', navigation: 'IdentityDocuments' },
  { title: 'Financial and Asset Documents', imageUrl: 'https://example.com/financial.png', navigation: 'FinancialAssetDocuments' },
  { title: 'Travel Documents', imageUrl: 'https://example.com/travel.png', navigation: 'TravelDocuments' },
  { title: 'Medical Documents', imageUrl: 'https://example.com/medical.png', navigation: 'MedicalDocuments' },
];

const DocumentsScreen: React.FC = () => {
  const navigation = useNavigation();
  const uploadDocumentsNavigation = useNavigation<UploadDocumentsScreenNavigationProp>();
  const documentsNavigation = useNavigation<DocumentsScreenNavigationProp>();
  const sharedDocumentsNavigation = useNavigation<SharedDocumentsScreenNavigationProp>();
  const profileNavigation = useNavigation<ProfileScreenNavigationProp>();
  const homeNavigation = useNavigation<HomeScreenNavigationProp>();
  const identityDocumentsNavigation = useNavigation<DocumentsScreenNavigationProp>();
  const travelDocumentsNavigation = useNavigation<SelectDocumentsPageNavigationProp>();
  const medicalDocumentsNavigation = useNavigation<ReciveDocumentProps>();
  const financialAssetDocumentsNavigation = useNavigation<NotificationScreenProps>();

  const handleDocumentPress = (screenName: string) => {
    switch (screenName) {
      case 'IdentityDocuments':
        identityDocumentsNavigation.navigate('IdentityDocuments');
        break;
      case 'FinancialAssetDocuments':
        financialAssetDocumentsNavigation.navigate('FinancialAssetDocuments');
        break;
      case 'TravelDocuments':
        travelDocumentsNavigation.navigate('TravelDocuments');
        break;
      case 'MedicalDocuments':
        medicalDocumentsNavigation.navigate('MedicalDocuments');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar />
        <Text style={styles.headerText}>My Documents</Text>
        <View style={styles.grid}>
          {documentData.map((doc, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleDocumentPress(doc.navigation)}>
              {doc.imageUrl && <Image source={{ uri: doc.imageUrl }} style={styles.documentIcon} />}
              <Text style={styles.text}>{doc.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={() => homeNavigation.navigate('Home')}>
          <HomeIcon />
          <Text style={styles.navbarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={() => documentsNavigation.navigate('Documents')}>
          <DocumentIcon />
          <Text style={styles.navbarButtonText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={() => uploadDocumentsNavigation.navigate('UploadDocuments')}>
          <UploadIcon />
          <Text style={styles.navbarButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={() => profileNavigation.navigate('Profile')}>
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
