import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>UIL</Text>
                <Text style={styles.headerText}>Share Documents</Text>

                <Text style={styles.descriptionText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000077',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 30,
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#000077',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    }
});

export default LoginScreen;
