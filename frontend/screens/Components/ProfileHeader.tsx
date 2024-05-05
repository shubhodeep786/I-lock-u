import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileHeaderProps {
  userName: string;
  userId: string;
  userImage: { uri: string };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userName, userId, userImage }) => {
  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.image} />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.id}>{userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  id: {
    color: 'gray',
  }
});

export default ProfileHeader;
