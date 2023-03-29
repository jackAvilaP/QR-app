import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CardId from './src/components/CardId';

import ScannerQR from './src/components/ScannerQR';
import Whatsapp from './src/components/Whatsapp';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScannerQR /> */}
      {/* <Whatsapp /> */}
      <CardId/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:300
  }
});
