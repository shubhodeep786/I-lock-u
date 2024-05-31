
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigationTypes';

interface Notification {
  id: string;
  senderName: string;
  message: string;
  time: string;
  read: boolean;
}

const hardcodedNotifications: Notification[] = [
  { id: '1', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: false },
  { id: '2', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: true },
  { id: '3', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: false },
  { id: '4', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: true },
  { id: '5', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: false },
  { id: '6', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: true },
  { id: '7', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: false },
  { id: '8', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: true },
  { id: '9', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: false },
  { id: '10', senderName: 'Sachin Burnwal', message: 'Sent You a File', time: '10:00 AM Feb 2, 2024', read: true },
];

const NotificationItem: React.FC<Notification> = ({ senderName, message, time, read }) => {

  return (
    <View style={[styles.notificationContainer, read && styles.readNotification]}>
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
  const [notifications, setNotifications] = useState<Notification[]>(hardcodedNotifications);
  const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>(hardcodedNotifications);
  const [filter, setFilter] = useState<'All' | 'Unread' | 'Read'>('All');
  const HomeScreenNavigation = useNavigation<HomeScreenNavigationProp['navigation']>();
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('https://yourapi.com/notifications'); // Replace with your API endpoint
        if (response.ok) {
          const data: Notification[] = await response.json();
          setNotifications(data);
          setFilteredNotifications(data);
        } else {
          throw new Error('Failed to fetch notifications');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
        Alert.alert('Error', 'Failed to fetch notifications. Using hardcoded data.');
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    filterNotifications();
  }, [filter, notifications]);

  const filterNotifications = () => {
    if (filter === 'Unread') {
      setFilteredNotifications(notifications.filter(notification => !notification.read));
    } else if (filter === 'Read') {
      setFilteredNotifications(notifications.filter(notification => notification.read));
    } else {
      setFilteredNotifications(notifications);
    }
  };

  const UserHomeButtonClicked = () => {
    HomeScreenNavigation.navigate('UserHome');
  };

  const handleClose = () => {
    console.log('Close button pressed');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText} onPress={UserHomeButtonClicked}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setFilter('All')} style={[styles.tab, filter === 'All' && styles.activeTab]}>
          <Text style={[styles.tabText, filter === 'All' && styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Unread')} style={[styles.tab, filter === 'Unread' && styles.activeTab]}>
          <Text style={[styles.tabText, filter === 'Unread' && styles.activeTabText]}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Read')} style={[styles.tab, filter === 'Read' && styles.activeTab]}>
          <Text style={[styles.tabText, filter === 'Read' && styles.activeTabText]}>Read</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredNotifications}
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
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    backgroundColor: '#007BFF',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
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
