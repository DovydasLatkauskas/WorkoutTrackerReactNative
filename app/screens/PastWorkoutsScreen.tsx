import {Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";
import Workout from "../models/Workout";
import PerformedSuperset from "../models/PerformedSuperset";
import PerformedExercise from "../models/PerformedExercise";
import ExerciseSet from "../models/ExerciseSet";

interface PastWorkoutsScreenProps {
    navigation: any;
}

function PastWorkoutsScreen(props:PastWorkoutsScreenProps){
    //const handleCheckoutWorkoutButton =  () => props.navigation.navigate("")
    const handleCheckoutWorkoutButton =  () => Alert.alert(
        "Checkout workout", "will allow you to checkout the workout",
        [{text:"ok"}]) // temporary stand-in

    const workoutsTestData = [
        new Workout("1", "First Workout",
            [new PerformedSuperset(
                [new PerformedExercise(
                    "1", [new ExerciseSet(3, 4, 5)]
                )], [2, 3])]
            , "notes 1", 3, 5),
        new Workout("2", "Second Workout", [new PerformedSuperset(
            [new PerformedExercise("2", [new ExerciseSet(1,2,3)])],
            [1])], "notes 2", 4, 5)
    ];
    const pastWorkouts : Workout[] = workoutsTestData // temporary
    // TODO: finish flatlist, add workout data

    return(
        <View>
            <Text style={commonStyles.topBar}>Past Workouts</Text>
            <GreyLine/>
            <FlatList
                data={pastWorkouts}
                renderItem={({ item }) =>
                    <View>
                        <Text style={localStyles.workout}>{item.name}</Text>
                    </View>
            }
                keyExtractor={(item) => item.id}
            />
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={[commonStyles.button, localStyles.workoutTouchable]}
                                  onPress={handleCheckoutWorkoutButton}>
                    <Text style={commonStyles.buttonText}>Checkout Past Workout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    workoutTouchable: {
        height: 50,
        width: "60%"
    },
    workout: {
        padding: 20,
        fontSize: 15,
        marginTop: 5
    }
});
export default PastWorkoutsScreen;