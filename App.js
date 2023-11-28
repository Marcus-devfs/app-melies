import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './src/contexts/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/components/organisms/layout/StackNavigation';


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppProvider>
        <StackNavigation />
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
