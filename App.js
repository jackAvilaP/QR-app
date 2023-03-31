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
    <ImageBackground source={ampersand} style={styles.container}>
      {/* <ScannerQR /> */}
      {/* <Whatsapp /> */}
      <View style={styles.container2}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#5E2F77",
            marginBottom: 30,
          }}
        >
          Identification
        </Text>
        <CardId />
        {/* <FontAwesome name="whatsapp" size={30} style={styles.iconWhatsapp} />
        <View style={styles.button}>
          <Button title="rescan" />
        </View> */}
      </View>
      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    width: Dimensions.get("screen").width,
    padding: 30,
  },
  iconWhatsapp: {
    color: "green",
  },
  button: {
    borderRadius: 100,
  },
});
