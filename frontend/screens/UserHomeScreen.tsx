import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {UploadDocumentsScreenNavigationProp, DocumentsScreenNavigationProp, SharedDocumentsScreenNavigationProp, ProfileScreenNavigationProp, RootStackParamList} from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
const HomeIcon = () => (
  
  <Image
    source={{ uri: 'https://example.com/profile-picture.jpg' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const DocumentIcon = () => (
  <Image
    source={{ uri: 'https://example.com/profile-picture.jpg' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const UploadIcon = () => (
  <Image
    source={{ uri: 'https://example.com/profile-picture.jpg' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: 'https://example.com/profile-picture.jpg' }}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const UserHomeScreen = () => {
  const navigation1 = useNavigation<UploadDocumentsScreenNavigationProp['navigation']>();
  const navigation2 = useNavigation<DocumentsScreenNavigationProp['navigation']>();
  const navigation3 = useNavigation<SharedDocumentsScreenNavigationProp['navigation']>();
  const navigation4 = useNavigation<ProfileScreenNavigationProp['navigation']>();
  // const navigation5 = useNavigation<['navigation']>();
  // const navigation6 = useNavigation<UnlockScreenNavigationProp['navigation']>();

  const handleNextPress1 = () => {
    navigation1.navigate('UserHome');
  };
  const handleNextPress2 = () => {
    navigation2.navigate('Documents');
  };
  const handleNextPress3 = () => {
    navigation3.navigate('UploadDocuments');
  };
  const handleNextPress4 = () => {
    navigation4.navigate('Profile');
  };

  const handleNextPress5 = () => {
    navigation5.navigate('SharedDocuments');
  };
  const handleNextPress6 = () => {
    navigation6.navigate('UnlockScreen');
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
        {/* Profile picture */}
        <Image
          source={{ uri: 'https://example.com/profile-picture.jpg' }}
          style={styles.profilePicture}
        />
        {/* User info */}
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

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.shareDocumentButton]} onClick={}>
          <DocumentIcon />
          <Text style={styles.actionButtonText}>Share Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.receiveDocumentButton]} onClick={}>
          <UploadIcon />
          <Text style={styles.actionButtonText}>Receive Document</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.recentDocumentsTitle} onClick={}>Recent Documents</Text>

      {/* Recent Documents */}
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
        <TouchableOpacity style={styles.navbarButton} onPress={handleNextPress1}>
          <HomeIcon />
          <Text style={styles.navbarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleNextPress2}>
          <DocumentIcon />
          <Text style={styles.navbarButtonText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleNextPress3}>
          <UploadIcon />
          <Text style={styles.navbarButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleNextPress4}>
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
    marginLeft: 16,
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
});

export default UserHomeScreen;
