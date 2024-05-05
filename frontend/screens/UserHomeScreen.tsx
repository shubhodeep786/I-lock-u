// ProfileScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UserProfileHeader from './Components/UserProfileHeader';
import DocumentCard from './Components/DocumentCard';
import ActionButton from './Components/ActionButton';

const UserHomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <UserProfileHeader
        name="Kundan Chouhan"
        uid="d1kdxt123456789abcdefg"
        phone="+6294530017"
        email="chouhankundan67@gmail.com"
        dob="26 Oct 2000"
        aadhar="9738 0172 0282"
        pan="GH55H562"
        profileImage={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' }}
      />
      <ActionButton title="Share Documents" onPress={() => console.log('Share')} />
      <ActionButton title="Receive Document" onPress={() => console.log('Receive')} />
      {/* <DocumentCard
        title="Aadhar Card"
        uploadDate="1 Jan 2021"
        shareDate="1 Jan 2021"
        imageUrl={require('./path-to-aadhar-image.png')}
      />
      <DocumentCard
        title="Pan Card"
        uploadDate="1 Jan 2021"
        shareDate="1 Jan 2021"
        imageUrl={require('./path-to-pan-image.png')}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default UserHomeScreen;
