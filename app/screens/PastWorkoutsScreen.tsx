import {Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

interface PastWorkoutsScreenProps {
    navigation: any;
}

function PastWorkoutsScreen(props:PastWorkoutsScreenProps){
    //const handleCheckoutWorkoutButton =  () => props.navigation.navigate("")
    const handleCheckoutWorkoutButton =  () => Alert.alert(
        "Checkout workout", "will allow you to checkout the workout",
        [{text:"ok"}]) // temporary stand-in
    const pastWorkouts : Workout[] = [] // temporary
    // TODO: finish flatlist, add workout data, create database

    return(
        <View>
            <Text style={commonStyles.topBar}>Past Workouts</Text>
            <GreyLine/>
            <FlatList
                style={[commonStyles.container, localStyles.container]}
                data={pastWorkouts}
                renderItem={({ item }) => <Text style={localStyles.workout}>{item.name}</Text>}
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
    container: {
        flex:1
    },
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