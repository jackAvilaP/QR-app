import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/img/logo_blanco.png";
import perfil from "../assets/img/Simon.jpg";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

import perfil from "../assets/img/Simon.jpg";
import logoWhite from "../assets/img/logo_blanco.png";

import {
  useFonts as usePoppins,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const CardId = () => {
  return (
   
        <View style={styles.card}>
            <LinearGradient colors={['#e6007e', '#5e2f77']} end={{ x: 0.5, y: 0.5}} style={styles.linearGradient}>
                <Image 
                    style={styles.tinyLogo}
                    source={logo}
                />
                <Image 
                    style={styles.perfil}
                    source={perfil}
                />
                <View style={{alignItems:'center'}}>
                    <Text style={{ color:'white', fontSize:18}}>jose andres lopez</Text>
                    <Text  style={{ color:'white'}}>asesor comercial</Text>
                </View>
                    <View style={styles.line} ></View>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:30}}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <MaterialCommunityIcons name="email-outline" size={20} color="white" />
                        <Text  style={{ color:'white',marginLeft:10}}>jose@gmail.com</Text>
                    </View>
                    <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Foundation name="telephone" size={24} color="white" style={{marginRight:30}} />
                        <Text  style={{ color:'white', marginRight:20}}>32345471</Text>
                    </View>
                </View>

            </LinearGradient>
        </View>

  )
}


const styles = StyleSheet.create({
    card:{  
        
        height:400,    
        width:250,
    },
    perfil:{
        borderRadius:100,
        height: 110,
        width: 110,
    },
    tinyLogo:{
        height:100,
        width:150
    },
    line:{
        backgroundColor:'white',
        width:160,
        height:2
    },
    linearGradient: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius: 10,
  },
});

export default CardId;