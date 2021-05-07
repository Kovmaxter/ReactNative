import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
const UserComponent = (props) => {
    const {item, nav} = props;
    return <View style={[styles.box]}>
        <Text>name: {item.name}</Text>
        <Text>email: {item.email}</Text>
        <Button title={'user details'} onPress={()=> {
nav.navigate('UserDetails', {data: item});
        }}/>
    </View>;
};
export  default UserComponent;

let styles = StyleSheet.create({
    box: {height: 100,
        backgroundColor: 'silver',
        marginBottom: 3},

});
