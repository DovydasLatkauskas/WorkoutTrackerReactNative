import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import PastWorkoutsScreen from "./screens/PastWorkoutsScreen";
import {createStackNavigator} from "@react-navigation/stack";
import StartWorkoutScreen from "./screens/StartWorkoutScreen";
import React from "react";

const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Past Workouts" component={PastWorkoutsScreen}/>
            <Tab.Screen name="Exercises" component={ExercisesScreen}/>
            <Tab.Screen options={{ tabBarItemStyle: { display: 'none', }}} name="Start Workout" component={StartWorkoutScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default BottomTab;