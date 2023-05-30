import {Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import commonStyles from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

interface MainScreenProps {
    navigation: any;
}

function MainScreen(props:MainScreenProps){
const handleStartWorkoutButtonPress = () => props.navigation.navigate("Start Workout")
// const handleStartWorkoutButtonPress = () => Alert.alert(
//     "Start Workout", "should take you to the workout screen",
//     [{text:"ok"}]) // temporary stand-in

    return (
        <View style={commonStyles.container}>
            {/* only works on IOS, for android its just View */}
            <SafeAreaView>
                <Text style={localStyles.myHubName}>My Hub</Text>
                <GreyLine/>
                {/* TODO: make button look decent */}
                <TouchableOpacity style={[commonStyles.button, localStyles.startWorkoutButton]} onPress={handleStartWorkoutButtonPress}>
                    <Text style={commonStyles.buttonText}>Start Workout</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <StatusBar style="auto"/>
        </View>
    )
}
export default MainScreen;



const localStyles = StyleSheet.create({
    myHubName: {
        fontSize: 45,
        fontWeight: 'bold',
        left: "10%",
        paddingTop: "20%"
    },
    startWorkoutButton: {
        height: 50
    }
});