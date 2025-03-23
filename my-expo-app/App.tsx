import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
// import { verifyInstallation } from 'nativewind';

import './global.css';
import { View, Text } from "react-native";

export default function App() {
  // verifyInstallation();
  return (
    <>
      <ScreenContent title="Головна сторінка" path="Шпіон" />
      <StatusBar style="auto" />
    </>
  );
}
