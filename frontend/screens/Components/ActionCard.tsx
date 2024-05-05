// ActionCard.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

interface ActionCardProps {
  title: string;
  icon: any; // Adjust as needed for icon import
  onPress: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ActionCard;
