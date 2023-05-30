import {Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";

function StartWorkoutScreen(){
    const handleAddExerciseButtonPress = () => Alert.alert(
    "Add Exercise", "should take you to a screen to add an exercise",
    [{text:"ok"}]) // temporary stand-in

    return(
        <SafeAreaView style={commonStyles.container, localStyles.container}>
            <TouchableOpacity style={[commonStyles.button, localStyles.addExerciseButton]} onPress={handleAddExerciseButtonPress}>
                <Text style={commonStyles.buttonText}>Add Exercise</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    addExerciseButton: {
        height: 50,
        width: "60%"
    }
});
export default StartWorkoutScreen;