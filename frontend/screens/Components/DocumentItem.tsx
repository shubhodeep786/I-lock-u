import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DocumentItemProps = {
    title: string;
    uploadDate: string;
    sharedTo?: string;
    expiryDate: string;
};

const DocumentItem: React.FC<DocumentItemProps> = ({ title, uploadDate, sharedTo, expiryDate }) => {
    return (
        <View style={styles.card}>
            <Image source={require('../assets/document_icon.png')} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{uploadDate}</Text>
                {sharedTo && <Text style={styles.sharedTo}>{sharedTo}</Text>}
                <Text style={styles.expiryDate}>Expiry Date: {expiryDate}</Text>
            </View>
            <Ionicons name="share-social" size={24} color="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#666',
    },
    sharedTo: {
        fontSize: 12,
        color: '#666',
    },
    expiryDate: {
        fontSize: 12,
        color: '#666',
    },
});

export default DocumentItem;
