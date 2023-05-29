import {Alert, Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import commonStyles from "../CommonStyles";
import StartWorkoutScreen from "./StartWorkoutScreen";

function MainScreen() {
// const handleStartWorkoutButtonPress = () => StartWorkoutScreen()
const handleStartWorkoutButtonPress = () => Alert.alert(
    "Start Workout", "should take you to the workout screen") // temporary stand-in
    return (
        <View style={commonStyles.container}>
            {/* only works on IOS, for android its just View */}
            <SafeAreaView>
                <Text style={localStyles.myHubName}>My Hub</Text>
                {/* grey line */}
                <View style={localStyles.lineContainer}>
                    <View style={localStyles.line} />
                </View>
                <Button title={'Start Workout'} onPress={() => {handleStartWorkoutButtonPress}}/>
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
    lineContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    line: {
        height: 2,
        backgroundColor: '#A9A9A9',
        width: '80%'
    },
});