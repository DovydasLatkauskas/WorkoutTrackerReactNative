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
                <View style={{borderWidth:1}}>
                    <Text>Exercise Name</Text>
                    <Text>Set</Text>
                    <Text>Weight</Text>
                    <Text>Reps</Text>
                    <Text>Time</Text>
                </View>
                <TouchableOpacity style={[commonStyles.button, localStyles.exerciseTouchable]} onPress={handleAddExerciseButtonPress}>
                    <Text style={commonStyles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleSaveWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Save Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, localStyles.button]} onPress={handleCancelWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Cancel Workout</Text>
                </TouchableOpacity>
                <View style={localStyles.notesView}>
                    <Text>Notes:</Text>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            style={localStyles.notes}
                            placeholder="Your notes here"
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
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