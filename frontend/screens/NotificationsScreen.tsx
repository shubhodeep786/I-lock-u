import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NotificationItem from '../screens/Components/NotificationItem';

const notifications = [
  { id: '1', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  // Add more notifications as needed...
];

const NotificationsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default NotificationsScreen;
