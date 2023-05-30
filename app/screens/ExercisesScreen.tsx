import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import StartWorkoutScreen from "./StartWorkoutScreen";
import GreyLine from "../components/CommonComponents";

function ExercisesScreen(){
    const handleAddExerciseButtonPress = () => Alert.alert(
        "Add Exercise", "will allow you to add an exercise to the workout",
        [{text:"ok"}]) // temporary stand-in

    return(
        <ScrollView style={[commonStyles.container, localStyles.container]}>
            <Text style={commonStyles.topBar}>Your Exercises</Text>
            <GreyLine/>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={[commonStyles.button, localStyles.exerciseTouchable]} onPress={handleAddExerciseButtonPress}>
                    <Text style={commonStyles.buttonText}>Exercise Name</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex:1
    },
    exerciseTouchable: {
        height: 50,
        width: "60%"
    }
});
export default ExercisesScreen;