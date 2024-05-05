// types/navigationTypes.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  ConfirmPin: undefined;
  UnlockScreen: undefined;
  PinConfirmation: undefined;
  UserHome: undefined;
  UserHomeScreen: undefined;
  OTPVerification: undefined;
  SetPin: undefined;
  SetBiometric: undefined;

};

// Utilize NativeStackScreenProps for uniformity
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type ConfirmPinScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmPin'>;
export type UnlockScreenProps = NativeStackScreenProps<RootStackParamList, 'UnlockScreen'>;
export type PinConfirmationScreenProps = NativeStackScreenProps<RootStackParamList, 'PinConfirmation'>;
export type UserHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'UserHomeScreen'>;
export type OTPVerificationScreenProps = NativeStackScreenProps<RootStackParamList, 'OTPVerification'>;
export type SetPinScreenProps = NativeStackScreenProps<RootStackParamList, 'SetPin'>;
export type SetBiometricScreenProps = NativeStackScreenProps<RootStackParamList, 'SetBiometric'>;
export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;