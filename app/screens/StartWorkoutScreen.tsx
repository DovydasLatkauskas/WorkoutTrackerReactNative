import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import {GreyLine} from "../components/CommonComponents";
import RestStopwatch from "../components/StartWorkoutScreen/RestStopwatch";
import React from "react";
import ExerciseView from "../components/StartWorkoutScreen/ExerciseView";
import NotesView from "../components/StartWorkoutScreen/NotesView";

interface StartWorkoutScreenProps {
    navigation: any;
}

function StartWorkoutScreen(props:StartWorkoutScreenProps){

    const handleAddExerciseButtonPress =  () => props.navigation.navigate("Exercises")
    const handleSaveWorkoutButtonPress =  () => Alert.alert(
        ":)", "TODO",
        [{text:"ok"}]) // temporary stand-in
    const handleCancelWorkoutButtonPress =  () => Alert.alert(
        ":)", "TODO",
        [{text:"ok"}]) // temporary stand-in

    return(
        <ScrollView style={[commonStyles.container, localStyles.container]}>
            <Text style={commonStyles.topBar}>Workout</Text>
            <GreyLine/>
            <View style={{alignItems:"center"}}>
                <ExerciseView></ExerciseView>
                <TouchableOpacity style={[commonStyles.button, localStyles.exerciseTouchable]} onPress={handleAddExerciseButtonPress}>
                    <Text style={commonStyles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleSaveWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Save Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleCancelWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Cancel Workout</Text>
                </TouchableOpacity>
                <RestStopwatch/>
                <NotesView></NotesView>
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
    },
    button: {
        height: 50,
        width: "60%"
    },
    notesView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notes: {
        flexWrap: 'wrap',
        borderColor: 'darkgray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top'
    }
});
export default StartWorkoutScreen;