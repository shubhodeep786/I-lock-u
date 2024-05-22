import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface Notification {
  id: string;
  senderName: string;
  message: string;
  time: string;
}

const notifications: Notification[] = [
  { id: '1', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '2', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '3', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '4', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '5', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '6', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '7', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '8', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '9', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
  { id: '10', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024' },
];

const NotificationItem: React.FC<Notification> = ({ senderName, message, time }) => {
  return (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.senderName}>{senderName}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const NotificationsScreen: React.FC = () => {
  const handleClose = () => {
    // Handle close action (e.g., navigate back or hide the notification screen)
    console.log('Close button pressed');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>All</Text>
        <Text style={styles.tab}>Unread</Text>
        <Text style={styles.tab}>Read</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: 'black',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  senderName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#888',
    fontSize: 14,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default NotificationsScreen;
