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
        <Stack.Screen name="UnlockScreen" component={UnlockScreen} />
        <Stack.Screen name="PinConfirmation" component={PinConfirmationScreen} />
        <Stack.Screen name="UserHome" component={UserHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
