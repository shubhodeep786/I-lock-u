import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NotificationItemProps {
  senderName: string;
  message: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ senderName, message, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{senderName} {message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 16,
    color: 'black',
  },
  time: {
    fontSize: 12,
    color: 'grey',
  },
});

export default NotificationItem;
