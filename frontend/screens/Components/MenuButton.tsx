import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuButtonProps {
  title: string;
  onPress: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
  }
});

export default MenuButton;
