import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

interface StartWorkoutScreenProps {
    navigation: any;
}

function StartWorkoutScreen(props:StartWorkoutScreenProps){
    const handleAddExerciseButtonPress =  () => props.navigation.navigate("Exercises")

    return(
        <ScrollView style={[commonStyles.container, localStyles.container]}>
            <Text style={commonStyles.topBar}>Workout</Text>
            <GreyLine/>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={[commonStyles.button, localStyles.exerciseTouchable]} onPress={handleAddExerciseButtonPress}>
                    <Text style={commonStyles.buttonText}>Add Exercise</Text>
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
export default StartWorkoutScreen;