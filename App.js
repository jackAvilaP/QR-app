import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import CardId from "./src/components/CardId";
import ampersand from "./src/assets/img/AMPERSAND.png";
import { FontAwesome } from "@expo/vector-icons";
import ScannerQR from "./src/components/ScannerQR";
import Whatsapp from "./src/components/Whatsapp";
import Footer from "./src/components/Footer";
export default function App() {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
<<<<<<<<< Temporary merge branch 1
      {/* <ScannerQR /> */}
      {/* <Whatsapp /> */}
      <CardId/>
      
=========
      
      <ScannerQR />
      <Whatsapp />
      <StatusBar style="auto" />
>>>>>>>>> Temporary merge branch 2
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
});
