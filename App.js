import { StatusBar } from "expo-status-bar";

import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CardId from "./src/components/CardId";

import image3 from "./src/assets/img/AMPERSAND.png";
import MyDGrand from "./src/assets/img/MyDGrand.png";
import ScannerQR from "./src/components/ScannerQR";
import Whatsapp from "./src/components/Whatsapp";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
export default function App() {
  return (
    <View>
      {/* <ScannerQR /> */}
      {/* <Whatsapp /> */}
      <Image style={{position:"absolute", left:20, top:70, width:200,height:100, zIndex:100}} source={MyDGrand} />
      <ImageBackground source={image3} resizeMode="cover" style={styles.image}>
        <CardId />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: widthScreen,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: widthScreen,
    height: heightScreen,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
  },
});
