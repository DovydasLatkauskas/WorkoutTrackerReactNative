import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

interface PastWorkoutsScreenProps {
    navigation: any;
}

function PastWorkoutsScreen(props:PastWorkoutsScreenProps){
    //const handleCheckoutWorkoutButton =  () => props.navigation.navigate("Exercises")
    const handleCheckoutWorkoutButton =  () => Alert.alert(
        "Checkout workout", "will allow you to checkout the workout",
        [{text:"ok"}]) // temporary stand-in

    return(
        <ScrollView style={[commonStyles.container, localStyles.container]}>
            <Text style={commonStyles.topBar}>Workout</Text>
            <GreyLine/>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={[commonStyles.button, localStyles.workoutTouchable]}
                                  onPress={handleCheckoutWorkoutButton}>
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
    workoutTouchable: {
        height: 50,
        width: "60%"
    }
});
export default StartWorkoutScreen;