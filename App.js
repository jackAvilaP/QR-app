import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScannerQR from './src/components/ScannerQR';
import Whatsapp from './src/components/Whatsapp';
export default function App() {
  return (
    <View style={styles.container}>
      <ScannerQR />
      <Whatsapp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:300
  }
});
