import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

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
                {/*
                <WorkPeriod> { this is a custom component for an exercise or superset TODO: implement }

                </WorkPeriod>
                */}
                <TouchableOpacity style={[commonStyles.button, localStyles.exerciseTouchable]} onPress={handleAddExerciseButtonPress}>
                    <Text style={commonStyles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleSaveWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Save Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleCancelWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Cancel Workout</Text>
                </TouchableOpacity>
                <View> {/* text area*/}
                    <Text>Notes</Text>
                    <TextInput editable
                               multiline
                               numberOfLines={4}
                               maxLength={40}></TextInput>
                </View>
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
    }
});
export default StartWorkoutScreen;