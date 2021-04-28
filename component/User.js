import React from "react";
import {FlatList, StyleSheet, Text, Button, View, Image, TouchableOpacity} from 'react-native';

const User= ({item}) => {
    return <View style= {[styles.item, styles.box]}>
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Text> {item.name} - {item.age} - {item.status.toString()}</Text>
        <Button title={'some button'}
        onPress={()=> console.log('press')}/>
    </View>;
};
export default User;

let styles = StyleSheet.create({  box: {
        height: 100,
        width: '100%',
        marginBottom: 10,
    },
    item: {
        backgroundColor: 'tomato',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
