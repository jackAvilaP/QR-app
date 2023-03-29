import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/img/logo.png';
import * as Linking from 'expo-linking';
import { LinearGradient } from 'expo-linear-gradient';
import CardId from './CardId';


const Whatsapp = () => {
    const hadlesCallPress = async () => {
        await Linking.openURL('tel:+573217802062');
    }
    const hadlesSMSPress = async () => {
        await Linking.openURL('sms:+573234380978?body=Mensaje de prueba')
    }
    const hadlesEmailPress = async () => {
        await Linking.openURL('mailto:jackpower@hotmail.es')
    }
    const hadlesWhatsappPress = () => {
        Linking.openURL('https://wa.me/+573167515135?text=holaa')
    }
    return (
        <View>
            {/* <Button title='llamar' onPress={() => hadlesCallPress()} /> */}
            {/* <Button title='SMS' onPress={() => hadlesSMSPress()} />
            <Button title='Email' onPress={() => hadlesEmailPress()} /> */}

             <Button style={styles.buttonReturnt} title='Whatsapp' onPress={() => hadlesWhatsappPress()} /> 
    
        </View>
        
    )
}

const styles = StyleSheet.create({
  buttonReturnt: {

  },
});
export default Whatsapp;