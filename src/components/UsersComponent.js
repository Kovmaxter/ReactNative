import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../api/Api";
import UserComponent from "./UserComponent";

const UsersComponent = (props) => {
    const {navigation} = props;
    let [users, setUsers] = useState([]);

    async function fetchData() {
        let users = await getUsers();
        setUsers([...users]);

    }
    useEffect( () => {
        fetchData();
        return () => {
            console.log('hello');
        };
    }, []);
    return <View>
        <FlatList data={users}
        renderItem={({item}) => {return <UserComponent nav={navigation} item={item}/>;}}
        keyExtractor={item => ''+item.id}

        />

    </View>

};
export default UsersComponent;

let styles = StyleSheet.create({});
