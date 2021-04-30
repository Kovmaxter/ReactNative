import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUser, getUsers} from "./src/api/Api";
import UserComponets from "./src/components/UsersComponent";
import UsersComponent from "./src/components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UsersDetailsComponent from "./src/components/UsersDetailsComponent";

let StackNavigator=createStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
<StackNavigator.Navigator>
    <StackNavigator.Screen name={'UsersComponent'} component={UsersComponent}/>
    <StackNavigator.Screen name={'UserDetails'} component={UsersDetailsComponent}/>


</StackNavigator.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
