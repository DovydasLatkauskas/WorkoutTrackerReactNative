import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import StartWorkoutScreen from "./screens/StartWorkoutScreen";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Main Screen">
            <Screen name="Main" component={MainScreen}></Screen>
            <Screen name="Start Workout" component={StartWorkoutScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;