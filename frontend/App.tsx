import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';
import VerifyOTPScreen from './screens/VerifyOTPScreen';
import SetPinScreen from './screens/SetPinScreen';
import PinConfirmationScreen from './screens/PinConfirmationScreen';
import SetBiometricScreen from './screens/SetBiometricScreen';
import UserHomeScreen from './screens/UserHomeScreen';
import UnlockScreen from './screens/UnlockScreen';
import UploadDocumentsScreen from './screens/UploadDocumentsScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import SharedDocumentsScreen from './screens/SharedDocumentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import FullScreenScanner from './screens/FullScreenScanner';
import SelectDocumentsPage from './screens/SelectDocumentsPage';
import QRCodePage from './screens/QRCodePage';
import SendingScreen from './screens/SendingScreen';
import IdentityDocumentsScreen from './screens/IdentityDocumentsScreen';
import ReceiveDocumentsPage from './screens/ReceiveDocumentsPage'
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="OTPVerification" component={VerifyOTPScreen} />
        <Stack.Screen name="SetPin" component={SetPinScreen} />
        <Stack.Screen name="ConfirmPin" component={PinConfirmationScreen} />
        <Stack.Screen name="SetBiometric" component={SetBiometricScreen} />
        <Stack.Screen name="UserHome" component={UserHomeScreen} />
        <Stack.Screen name="UnlockScreen" component={UnlockScreen} />
        <Stack.Screen name="PinConfirmation" component={PinConfirmationScreen} />
        <Stack.Screen name="UploadDocuments" component={UploadDocumentsScreen} />
        <Stack.Screen name="Documents" component={DocumentsScreen} />
        <Stack.Screen name="SharedDocuments" component={SharedDocumentsScreen} />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
        <Stack.Screen name="UploadDocument" component={UploadDocumentsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FullScreenScanner" component={FullScreenScanner} />
        <Stack.Screen name="SelectDocuments" component={SelectDocumentsPage} />
        <Stack.Screen name="QRCode" component={QRCodePage} />
        <Stack.Screen name="SendingScreen" component={SendingScreen} />
        <Stack.Screen name="IdentityDocuments" component={IdentityDocumentsScreen} />
        <Stack.Screen name="ReciveDocument" component={ReceiveDocumentsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
