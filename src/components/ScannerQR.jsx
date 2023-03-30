import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';


const ScannerQR = () => {
    const [permission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        getCodePermissionScanners = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === 'granted')
        };
        getCodePermissionScanners();
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (permission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (permission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                    width: 300,
                    height: 300,
                }}
            />
             {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </>
    )
}
export default ScannerQR