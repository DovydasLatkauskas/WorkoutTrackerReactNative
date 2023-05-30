import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import StartWorkoutScreen from "./screens/StartWorkoutScreen";
import ExercisesScreen from "./screens/ExercisesScreen";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <Screen name="Home" component={HomeScreen}></Screen>
            <Screen name="Start Workout" component={StartWorkoutScreen}></Screen>
            <Screen name="Exercises" component={ExercisesScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;