import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';


const CameraComponent = () => {

let [hasPermission, setHasPermission] = useState(null);
let [camera, setCamera] = useState(null);

let [type, setType] = useState(Camera.Constants.Type.back);
useEffect(()=>{
    (async () => {
let {status} =  await Camera.requestPermissionsAsync();
setHasPermission(status === 'granted');
    })();
}, []);

if (hasPermission === null) {
    return <View/>;
}
if (hasPermission === false) {
    return <Text>no access to permission</Text>
}

    async function takePicture() {
if (hasPermission) {
   let data = await camera.takePictureAsync(null);
    console.log(data);
   await MediaLibrary.saveToLibraryAsync(data.uri);
}
    }

    function flipBack() {
        setType(Camera.Constants.Type.back)
    }

    function flipFront() {
        setType(Camera.Constants.Type.front)
    }

    return <View style={styles.container}>

        <Text>CameraComponent page</Text>
        <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ref={(r) => setCamera(r)}/>
            <Button title={'picture'} onPress={takePicture}/>
            <Button title={'back'} onPress={flipBack}/>
            <Button title={'front'} onPress={flipFront}/>
        </View>
    </View>;
};
export  default CameraComponent;

let styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'tomato'},
    cameraContainer: {flex: 1},
    fixedRatio: {flex: 1, aspectRatio: 1},
});
