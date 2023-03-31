import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import CardId from './src/components/CardId';
import ampersand from './src/assets/img/AMPERSAND.png';
import ScannerQR from './src/components/ScannerQR';
import Whatsapp from './src/components/Whatsapp';
export default function App() {
  return (
      <ImageBackground source={ampersand} style={styles.container}>
      {/* <ScannerQR /> */}
      {/* <Whatsapp /> */}
        <CardId/>
      </ImageBackground>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
  },
  button:{
    width:300
  }
});
