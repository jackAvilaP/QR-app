import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Feather
          name="linkedin"
          size={27}
          color="#E6007E"
          style={styles.icons}
        />
        <MaterialCommunityIcons
          name="instagram"
          size={27}
          color="#E6007E"
          style={styles.icons}
        />
        <FontAwesome5
          name="youtube"
          size={27}
          color="#E6007E"
          style={styles.icons}
        />
        <MaterialIcons name="facebook" size={27} color="#E6007E" />
      </View>
      <Text style={{ marginBottom: 15, marginTop: 10, fontSize:10 }}>
        ©2023 FAJAS MYD - Desarrollo e Innovaciones SION
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D2D1D1",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginBottom: 10,
    marginTop: 10,
  },
  icons: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Footer;
