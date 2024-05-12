import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DocumentActionsScreen = () => {
    const navigation = useNavigation();
    const [showQR, setShowQR] = useState(false);

    const handleUploadDocumentsClick = () => {
        // navigation.navigate('UploadDocuments');
    };

    const handleReceiveDocumentClick = () => {
        setShowQR(true);
    };

    const handleClose = () => {
        setShowQR(false);
    };

    if (showQR) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.qrContainer}>
                    <Image source={{ uri: "https://th.bing.com/th/id/OIP.mK2kr2iSUYk_Fvz9c5LDhQHaHa" }} style={styles.qrImage} />
                    <Text style={styles.qrTitle}>Scan the QR Code to Receive File</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.documentActionsContainer}>
            <TouchableOpacity
                style={styles.documentActionButton}
                onPress={handleUploadDocumentsClick}
            >
                <Text style={styles.documentActionButtonText}>Share Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.documentActionButton}
                onPress={handleReceiveDocumentClick}
            >
                <Text style={styles.documentActionButtonText}>Receive Document</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    documentActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#4B0082',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: 10,
        marginTop: 10,
    },
    documentActionButton: {
        backgroundColor: '#0000CD',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 80,
    },
    documentActionButtonText: {
        color: '#FFFFFF',
        marginTop: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    closeButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 20,
        color: 'black',
    },
    qrContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    qrImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    qrTitle: {
        marginTop: 20,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});

export default DocumentActionsScreen;
