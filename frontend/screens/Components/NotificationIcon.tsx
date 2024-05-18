import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const NotificationIcon: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/notification.png' }} 
        style={styles.icon} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default NotificationIcon;
