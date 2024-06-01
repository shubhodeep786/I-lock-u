import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Text, Image } from 'react-native';

const SearchBar: React.FC = () => {
    return (
        <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchInput} placeholder="Search for documents" />
        </View>
    );
};

const DocumentCard: React.FC<{ type: string, name: string, date: string, imageUri: string }> = ({ type, name, date, imageUri }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUri }} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{name}</Text>
                <View style={styles.cardSubtitleContainer}>
                    <Text style={styles.cardSubtitle}>{type}</Text>
                    <Text style={styles.cardDate}>{date}</Text>
                </View>
            </View>
        </View>
    );
};

const TravelDocumentScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <SearchBar />
            <DocumentCard
                type="Aadhar Card"
                name="Kundan Chouhan"
                date="Uploaded 1 Jan, 2020"
                imageUri="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png" // Replace with actual image URLs
            />
            <DocumentCard
                type="PAN Card"
                name="Kundan Chouhan"
                date="Uploaded 1 Jan, 2020"
                imageUri="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png" // Replace with actual image URLs
            />
            <DocumentCard
                type="Driving License"
                name="Kundan Chouhan"
                date="Uploaded 1 Jan, 2020"
                imageUri="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png" // Replace with actual image URLs
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F8F9FD',
    },
    searchBarContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 16,
    },
    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
        marginBottom: 16,
        borderRadius: 8,
    },
    cardTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardSubtitleContainer: {
        alignItems: 'flex-end',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777',
    },
    cardDate: {
        fontSize: 12,
        color: '#AAA',
    },
});

export default TravelDocumentScreen;

