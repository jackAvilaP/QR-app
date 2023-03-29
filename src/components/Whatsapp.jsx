import React from 'react'
import { Button, Text } from 'react-native';
import * as Linking from 'expo-linking';
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
        Linking.openURL('https://wa.me/+573234360879?text=holaa')
    }
    return (
        <>

            {/* <Button title='llamar' onPress={() => hadlesCallPress()} />
            <Button title='SMS' onPress={() => hadlesSMSPress()} />
            <Button title='Email' onPress={() => hadlesEmailPress()} /> */}

            <Button title='Whatsapp' onPress={() => hadlesWhatsappPress()} />
        </>
    )
}

export default Whatsapp;