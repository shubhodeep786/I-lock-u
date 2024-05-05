import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp, RootStackParamList } from '../types/navigationTypes'; // Adjust the path as necessary


interface LoginScreenProps { }

const LoginScreen: React.FC<LoginScreenProps> = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>UIL</Text>
            <Text style={styles.headerText}>Share Documents</Text>
            <Text style={styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
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
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    }
});

export default LoginScreen;
