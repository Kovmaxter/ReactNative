import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUser, getUsers} from "./src/api/Api";
import UsersComponent from "./src/components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UsersDetailsComponent from "./src/components/UsersDetailsComponent";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostsComponent from "./src/components/PostsComponent";
import PostDrawer from "./src/components/PostDrawer";
import CameraComponent from "./src/components/CameraComponent";

let BottomTabNavigator= createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
            <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
                <BottomTabNavigator.Screen name={'users'} component={UsersComponent}/>
                <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
                <BottomTabNavigator.Screen name={'camera'} component={CameraComponent} options={{unmountOnBlur: true}}/>
            </BottomTabNavigator.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
