import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ExercisesScreen from "./screens/ExercisesScreen";

const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Past Workouts" component={}/>
            <Tab.Screen name="Exercises" component={ExercisesScreen}/>
        </Tab.Navigator>
    )
}