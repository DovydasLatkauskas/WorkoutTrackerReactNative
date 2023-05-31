import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import PastWorkoutsScreen from "./screens/PastWorkoutsScreen";

const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Past Workouts" component={PastWorkoutsScreen}/>
            <Tab.Screen name="Exercises" component={ExercisesScreen}/>
        </Tab.Navigator>
    )
}