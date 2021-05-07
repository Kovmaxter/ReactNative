import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
const UserDetailsComponent = ({route, navigation}) => {
    let {params :{data}} = route;
    useEffect(()=> {
        navigation.setOptions({title: data.name})
    })

    // console.log(props.route.params.data);
    return <View>
        <Text>{data.name}</Text>
    </View>;
};
export  default UserDetailsComponent;

let styles = StyleSheet.create({});
