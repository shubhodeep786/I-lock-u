import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DocumentItem from './Components/DocumentItem';

const documents = [
    { id: '1', title: 'Aadhar Card', uploadDate: 'Uploaded on 1 Jan 2020', expiryDate: '14 Feb 2020', sharedTo: 'Shared to 🌐' },
];

const SharedDocumentsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={documents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <DocumentItem {...item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
});

export default SharedDocumentsScreen;
